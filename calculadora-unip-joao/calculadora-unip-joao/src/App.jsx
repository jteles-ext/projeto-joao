import { useState } from "react";

export default function App() {
  const [np1, setNp1] = useState("");
  const [np2, setNp2] = useState("");
  const [pim, setPim] = useState("");
  const [aulas, setAulas] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const np1Num = parseFloat(np1);
    const np2Num = parseFloat(np2);
    const pimNum = parseFloat(pim);
    const aulasNum = parseInt(aulas);

    const MS = (4 * np1Num + 4 * np2Num + 2 * pimNum) / 10;
    const porcentagem = (aulasNum / 60) * 100;

    let status = "";
    if (porcentagem >= 75) {
      if (MS >= 7) {
        status = "APROVADO por nota!";
      } else {
        const exame = (5 * 2) - MS;
        status = `NECESSÁRIO EXAME. Nota mínima: ${exame.toFixed(2)}`;
      }
    } else {
      const faltam = 75 - porcentagem;
      status = `REPROVADO por frequência. Faltam ${faltam.toFixed(1)}%`;
    }

    let classificacao = "";
    if (porcentagem === 100) classificacao = "Perfeito!";
    else if (porcentagem >= 90) classificacao = "Ótima frequência";
    else if (porcentagem >= 75) classificacao = "Frequência satisfatória";
    else if (porcentagem >= 50) classificacao = "Frequência baixa";
    else classificacao = "Frequência muito baixa";

    setResultado({ MS, porcentagem, status, classificacao });
  };

  return (
    <div className="container">
      <h1>Calculadora UNIP João</h1>
      <input placeholder="Nota NP1" value={np1} onChange={e => setNp1(e.target.value)} />
      <input placeholder="Nota NP2" value={np2} onChange={e => setNp2(e.target.value)} />
      <input placeholder="Nota PIM" value={pim} onChange={e => setPim(e.target.value)} />
      <input placeholder="Horas de presença (máx 60)" value={aulas} onChange={e => setAulas(e.target.value)} />
      <button onClick={calcular}>Calcular</button>

      {resultado && (
        <div className="resultado">
          <p><strong>Média:</strong> {resultado.MS.toFixed(2)}</p>
          <p><strong>Frequência:</strong> {resultado.porcentagem.toFixed(1)}%</p>
          <p><strong>Status:</strong> {resultado.status}</p>
          <p><strong>Classificação:</strong> {resultado.classificacao}</p>
        </div>
      )}
    </div>
  );
}
