type Props = {
  activeTab: string;
};

export const TabContent = ({ activeTab }: Props) => {
  switch (activeTab) {
    case "skills":
      return (
        <ul className="list-disc mt-6 text-sm">
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>HTML/CSS</li>
          <li>Git</li>
        </ul>
      );
    case "education":
      return (
        <ul className="list-disc mt-6 text-sm">
          <li>ALX Kigali</li>
          <li>University of Rwanda, Kigali</li>
        </ul>
      );
    case "certifications":
      return (
        <ul className="list-disc mt-6 text-sm">
          <li>Web Development Bootcamp</li>
          <li>ALX Certificate</li>
        </ul>
      );
    default:
      return null;
  }
};
