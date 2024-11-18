// const baseURL = "https://unipark-a9b95-default-rtdb.firebaseio.com/";

// const addVeiculoComChave = async () => {
// //const chave = PLACA
//   //const novoVeiculo = OBJETO

//   try {
//     const response = await fetch(`${baseURL}veiculos/${chave}.json`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(novoVeiculo),
//     });

//     if (!response.ok) throw new Error("Erro ao adicionar veículo");

//     console.log("Veículo adicionado ou atualizado com sucesso!");
//   } catch (error) {
//     console.error("Erro:", error);
//   }
// };

// addVeiculoComChave();




// const baseURL = "https://unipark-a9b95-default-rtdb.firebaseio.com/";

// const getVeiculos = async () => {
//   try {
//     const response = await fetch(`${baseURL}veiculos.json`, {
//       method: "GET",
//     });

//     if (!response.ok) throw new Error("Erro ao buscar veículos");

//     const data = await response.json();
//     console.log("Todos os veículos:", data);

//     // Exemplo: Transformar em array para facilitar iterações
//     const veiculosArray = Object.entries(data).map(([chave, valor]) => ({
//       id: chave, // Adiciona a chave como ID
//       ...valor,
//     }));

//     console.log("Veículos como array:", veiculosArray);
//     return veiculosArray;
//   } catch (error) {
//     console.error("Erro ao obter veículos:", error);
//   }
// };

// getVeiculos();



// const baseURL = "https://unipark-a9b95-default-rtdb.firebaseio.com/";

// const substituirVeiculo = async (chave, novoVeiculo) => {
//   try {
//     const response = await fetch(`${baseURL}veiculos/${chave}.json`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(novoVeiculo),
//     });

//     if (!response.ok) throw new Error(`Erro ao substituir veículo com chave ${chave}`);

//     console.log(`Veículo com chave ${chave} substituído com sucesso!`);
//   } catch (error) {
//     console.error("Erro ao substituir veículo:", error);
//   }
// };

// // Exemplo de uso
// substituirVeiculo("ABC1234", { carro: "fusca", marca: "volkswagen" });


// const baseURL = "https://unipark-a9b95-default-rtdb.firebaseio.com/";

// const deletarVeiculo = async (chave) => {
//   try {
//     const response = await fetch(`${baseURL}veiculos/${chave}.json`, {
//       method: "DELETE",
//     });

//     if (!response.ok) throw new Error(`Erro ao deletar veículo com chave ${chave}`);

//     console.log(`Veículo com chave ${chave} deletado com sucesso!`);
//   } catch (error) {
//     console.error("Erro ao deletar veículo:", error);
//   }
// };

// // Exemplo de uso
// deletarVeiculo("ABC1234");


const baseURL = "https://unipark-a9b95-default-rtdb.firebaseio.com/";

const firebaseOperations = async ({ method, chave, dados }) => {
  try {
    let response;

    switch (method) {
      // Método POST: Adicionar um novo veículo com chave automática
      case "add":
        response = await fetch(`${baseURL}veiculos.json`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dados),
        });
        if (!response.ok) throw new Error("Erro ao adicionar veículo");
        console.log("Veículo adicionado com sucesso!");
        break;

      // Método GET: Buscar todos os veículos
      case "get":
        response = await fetch(`${baseURL}veiculos.json`, {
          method: "GET",
        });
        if (!response.ok) throw new Error("Erro ao buscar veículos");
        const data = await response.json();
        console.log("Veículos encontrados:", data);
        return data;

      // Método PUT: Substituir dados do veículo existente
      case "edit":
        if (!chave) throw new Error("Chave (placa) é necessária para editar.");
        response = await fetch(`${baseURL}veiculos/${chave}.json`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dados),
        });
        if (!response.ok) throw new Error(`Erro ao editar veículo com chave ${chave}`);
        console.log(`Veículo com chave ${chave} atualizado com sucesso!`);
        break;

      // Método PATCH: Editar parcialmente os dados de um veículo
      case "update":
        if (!chave) throw new Error("Chave (placa) é necessária para atualizar.");
        response = await fetch(`${baseURL}veiculos/${chave}.json`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dados),
        });
        if (!response.ok) throw new Error(`Erro ao atualizar veículo com chave ${chave}`);
        console.log(`Veículo com chave ${chave} atualizado parcialmente com sucesso!`);
        break;

      // Método DELETE: Deletar um veículo baseado na chave (placa)
      case "delete":
        if (!chave) throw new Error("Chave (placa) é necessária para deletar.");
        response = await fetch(`${baseURL}veiculos/${chave}.json`, {
          method: "DELETE",
        });
        if (!response.ok) throw new Error(`Erro ao deletar veículo com chave ${chave}`);
        console.log(`Veículo com chave ${chave} deletado com sucesso!`);
        break;

      default:
        throw new Error("Método inválido");
    }
  } catch (error) {
    console.error("Erro:", error);
  }
};

// Exemplo de uso para cada método

// 1. Adicionar um novo veículo
const novoVeiculo = { carro: "uno", marca: "fiat", placa: "ABC1234" };
firebaseOperations({ method: "add", dados: novoVeiculo });

// 2. Buscar todos os veículos
firebaseOperations({ method: "get" }).then((data) => console.log(data));

// 3. Editar um veículo (substituir todos os dados)
const dadosEditados = { carro: "fusca", marca: "volkswagen" };
firebaseOperations({ method: "edit", chave: "ABC1234", dados: dadosEditados });

// 4. Atualizar parcialmente um veículo (somente a marca)
const dadosParciais = { marca: "chevrolet" };
firebaseOperations({ method: "update", chave: "ABC1234", dados: dadosParciais });

// 5. Deletar um veículo
firebaseOperations({ method: "delete", chave: "ABC1234" });
