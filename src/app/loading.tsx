import Image from "next/image";

export default function LoadingPage() {
  return (
    <div className="flex justify-center mb-72 mt-8">
      <Image width={200} height={200} src="spinner.svg" alt="loading..." />
    </div>
  );
}
