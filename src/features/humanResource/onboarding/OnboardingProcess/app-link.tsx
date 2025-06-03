import { Button, Card } from "antd";

const AppLinkSender = () => {
  return (
    <Card title="Send App Link to Candidate">
      <Button type="primary" onClick={() => {
        // send email/SMS with app download + login instructions
      }}>
        Send Link
      </Button>
    </Card>
  );
};

export default AppLinkSender;
