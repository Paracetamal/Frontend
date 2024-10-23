import "./ClientTable.css";

const   ClientTable = ({ clients, onEvaluate }) => {
  return (
    <div className="container-table">
      <table>
        <thead>
          <tr>
            <th className="th-client-name">Nome do cliente</th>
            <th className="th-client-cpf">CPF</th>
            <th className="th-client-status">Status da conta</th>
            <th className="th-client-buy"></th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td className="td-client-name">{client.name}</td>
              <td className="td-client-cpf">{client.cpf}</td>
              <td className="td-client-status">
                <div className="container-client-status" data-status={client.status}>
                  {client.status}
                </div>
              </td>
              <td className="td-client-buy">
                <span 
                  className="material-symbols-outlined" 
                  onClick={onEvaluate}
                >
                  heart_plus
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
