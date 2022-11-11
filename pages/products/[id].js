import Image from "next/image";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default function Product({ product }) {
  return (
    <div>
      <h1>{product.title}</h1>
      <Image src={product.image} width={300} height={400} />
      <p>{product.description}</p>
    </div>
  );
}
