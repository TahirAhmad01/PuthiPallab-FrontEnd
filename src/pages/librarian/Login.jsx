import { Button } from "keep-react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div>This is student login page</div>
      <Link to="/librarian/dashboard">
        <Button size="sm" type="primary">
          Librarian Dashboard
        </Button>
      </Link>
    </div>
  );
}

export default Login;
