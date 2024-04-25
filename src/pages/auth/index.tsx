import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";
import { useQuery } from "@tanstack/react-query";
import { mutationLogin } from "./mutation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const [enabled, setEnabled] = useState(false);
  const { data } = useQuery({
    queryKey: ["login"],
    queryFn: mutationLogin,
    enabled: enabled
  });

  // const queryClient = useQueryClient();
  const navigate = useNavigate();

  useEffect(() => {
    if (data && data.guest_session_id) {
      localStorage.setItem("guest_session_id", data.guest_session_id);
      navigate("/");
      console.log("Suyash")
      setEnabled(false)
    }
  }, [data, navigate]);

  const handleClick = () => {
    setEnabled(true);
  };

  
  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="violet" textAlign="center">
          Welcome! Login by registering as a Guest below.
        </Header>
        <Form size="large">
          <Segment stacked>
            <Button
              color="violet"
              size="large"
              fluid
              onClick={handleClick}
            >
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};