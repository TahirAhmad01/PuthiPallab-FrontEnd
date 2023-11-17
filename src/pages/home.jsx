import { Button } from "keep-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      This is home page
      <div className="flex gap-4">
        <Link to="/student/login">
          <Button size="sm" type="primary">
            Student portal
          </Button>
        </Link>
        <Link to="/librarian/login">
          <Button size="sm" type="primary">
            Librarian portal
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
