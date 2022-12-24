type UserProps = {
  dados: {
    name: string,
    email: string,
  };
  updateFieldHandler: (key: string, value: string) => void;
};

const UserForm = ({dados, updateFieldHandler}: UserProps) => {
  return (
    <>
      <div className="form_control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          required
          value={dados.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
        />
      </div>
      <div className="form_control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          required
          value={dados.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
        />
      </div>
    </>
  );
}

export default UserForm