import { Card } from "react-bootstrap";

const MyCard = ({ title, technologies }) => {
  return (
    <>
      <Card
        style={{ width: "18rem" }}
        className="border shadow-lg mx-auto mt-8 bg-white border-gray-300"
      >
        <Card.Body className="text-center">
          <Card.Title className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
            {title}
          </Card.Title>
          {technologies.map((tech, index) => (
            <Card.Text key={index} className="text-blue-500 pb-2">
              {tech}
            </Card.Text>
          ))}
        </Card.Body>
      </Card>
    </>
  );
};

export default MyCard;
