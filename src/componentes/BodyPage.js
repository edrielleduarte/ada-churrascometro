import Header from './Header';
import Cards from './Cards';

export const BodyPage = () => {
  return (
    <div className="container">
      <div className="calculator">
        <Header
          titlePrincipal="Calculadora de Churrasco"
          subtitle="Precisa de uma ajudinha com o churrasco? :)"
          subTitlePs="Quantas pessoas vão participar?"
        />
        <div className="container-fluid ">
          <Cards title="Homens" />
          <Cards title="Mulheres" />
          <Cards title="Crianças" />
        </div>
      </div>
    </div>
  );
};

export default BodyPage;
