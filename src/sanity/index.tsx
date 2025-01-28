import { GetStaticProps } from 'next';
import { createClient } from 'next-sanity';
import Image from 'next/image';

const client = createClient({
  projectId: 'your-project-id', // Sanity Project ID
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

interface Product {
  _id: string;
  title: string;
  price: number;
  image: { asset: { url: string } };
}

interface Props {
  products: Product[];
}

export const getStaticProps: GetStaticProps = async () => {
  const query = `*[_type == "product"]{
    _id,
    title,
    price,
    "image": image.asset->url
  }`;
  const products = await client.fetch(query);

  return { props: { products } };
};

const Home: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div
          key={product._id}
          className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition"
        >
          <Image
            src={product.image.asset.url}
            alt={product.title}
            width={300}
            height={200}
            className="rounded-md object-cover w-full h-48"
          />
          <h2 className="text-lg font-bold mt-2">{product.title}</h2>
          <p className="text-gray-500">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
