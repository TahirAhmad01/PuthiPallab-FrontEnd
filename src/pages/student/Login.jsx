import { Button } from "keep-react";
import { Link } from "react-router-dom";

function StudentLogin() {
  return (
    <div>
      <div>This is student login page</div>
      <Link to="/student/dashboard">
        <Button size="sm" type="primary">
          Student Dashboard
        </Button>
      </Link>
    </div>
  );
}

export default StudentLogin;
