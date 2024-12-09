type Props = {
  message: string;
  email: string;
};

export const EmailTemplate = ({ message, email }: Props) => {
  return (
    <>
      <div>{message}</div>
      <p>
        <strong>From</strong>: {email}
      </p>
    </>
  );
};
