import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { mutationLogin } from "./mutation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const [enabled, setEnabled] = useState(false);
    // const [sessionid, Setsessionid] = useState("")
  const { data} = useQuery({
    queryKey: ["login"],
    queryFn: mutationLogin,
    enabled: enabled
  });

  const queryClient = useQueryClient();
  
  const handleClick = () => {
    // queryClient.invalidateQueries("login");
    setEnabled(true);
    localStorage.setItem("guest_session_id", data?.guest_session_id);

  };
  
    const navigate = useNavigate();
//   Setsessionid(data.guest_session_id)
//   console.log(sessionid)

  const handleLogin = async () => {
    // await mutate();
    localStorage.setItem("guest_session_id", data?.guest_session_id);

    console.log(data?.guest_session_id, "id");
    // console.log(data?.guest_session_id, "1");
    navigate("/");
  };
  // useEffect(()=>{
  //   console.log(data,12345)
  //   if (data) {
  //       localStorage.setItem("guest_session_id", data);
  //   }
  // },[data])

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
              onClick={async () => await handleClick()}
            >
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
