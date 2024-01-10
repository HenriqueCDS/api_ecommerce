'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkInsert('imagens_carrossel', [ {
        idProduto: 1,
        img1: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTGA72apxvDynFVgN6bL1a-jjV_Xo8EcW0xZIrgqU6DrzxSdAUTEnRI-blQW58ynM67mRPAzyHE9sbEZgcRlSWFMiFCqZuL&usqp=CAY",
        img2: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRHN6Odl73rMQZTNVrbHIhryJd7skqTfLEkbWteojNWxWBifydSiJl8Bw5GC1ePtkjZ4OSgkJB9vPxMYPQlX34CfCXCyUmKtdYAEXq6ccU&usqp=CAE",
        img3: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQCr7OBIBpUAKz_8q7ofVHVj53ZxzN6wRXxT6fLhxGx5PkJEJvtl9I6rFIcKymNzo_m3nQe_ANPYh6D_fauUSXrceK6E3-qhA&usqp=CAY",
        img4: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRidUJ7-aX3z__eMr9aOM-cul2AX4Y1_wBbNwUhb40pCWzdlg_v6287KQ9ooZasmV9Bl0DTeXzVrPMbZARtRHFAMqTMRbr2HTEOIoPfSwPF&usqp=CAE"
    
      },
      {
        idProduto: 2,
        img1: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTGA72apxvDynFVgN6bL1a-jjV_Xo8EcW0xZIrgqU6DrzxSdAUTEnRI-blQW58ynM67mRPAzyHE9sbEZgcRlSWFMiFCqZuL&usqp=CAY",
        img2: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRHN6Odl73rMQZTNVrbHIhryJd7skqTfLEkbWteojNWxWBifydSiJl8Bw5GC1ePtkjZ4OSgkJB9vPxMYPQlX34CfCXCyUmKtdYAEXq6ccU&usqp=CAE",
        img3: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQCr7OBIBpUAKz_8q7ofVHVj53ZxzN6wRXxT6fLhxGx5PkJEJvtl9I6rFIcKymNzo_m3nQe_ANPYh6D_fauUSXrceK6E3-qhA&usqp=CAY",
        img4: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRidUJ7-aX3z__eMr9aOM-cul2AX4Y1_wBbNwUhb40pCWzdlg_v6287KQ9ooZasmV9Bl0DTeXzVrPMbZARtRHFAMqTMRbr2HTEOIoPfSwPF&usqp=CAE"
    
      },
      {
        idProduto: 3,
        img1: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTGA72apxvDynFVgN6bL1a-jjV_Xo8EcW0xZIrgqU6DrzxSdAUTEnRI-blQW58ynM67mRPAzyHE9sbEZgcRlSWFMiFCqZuL&usqp=CAY",
        img2: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRHN6Odl73rMQZTNVrbHIhryJd7skqTfLEkbWteojNWxWBifydSiJl8Bw5GC1ePtkjZ4OSgkJB9vPxMYPQlX34CfCXCyUmKtdYAEXq6ccU&usqp=CAE",
        img3: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQCr7OBIBpUAKz_8q7ofVHVj53ZxzN6wRXxT6fLhxGx5PkJEJvtl9I6rFIcKymNzo_m3nQe_ANPYh6D_fauUSXrceK6E3-qhA&usqp=CAY",
        img4: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRidUJ7-aX3z__eMr9aOM-cul2AX4Y1_wBbNwUhb40pCWzdlg_v6287KQ9ooZasmV9Bl0DTeXzVrPMbZARtRHFAMqTMRbr2HTEOIoPfSwPF&usqp=CAE"
    
      },
      {
        idProduto: 4,
        img1: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTGA72apxvDynFVgN6bL1a-jjV_Xo8EcW0xZIrgqU6DrzxSdAUTEnRI-blQW58ynM67mRPAzyHE9sbEZgcRlSWFMiFCqZuL&usqp=CAY",
        img2: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRHN6Odl73rMQZTNVrbHIhryJd7skqTfLEkbWteojNWxWBifydSiJl8Bw5GC1ePtkjZ4OSgkJB9vPxMYPQlX34CfCXCyUmKtdYAEXq6ccU&usqp=CAE",
        img3: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQCr7OBIBpUAKz_8q7ofVHVj53ZxzN6wRXxT6fLhxGx5PkJEJvtl9I6rFIcKymNzo_m3nQe_ANPYh6D_fauUSXrceK6E3-qhA&usqp=CAY",
        img4: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRidUJ7-aX3z__eMr9aOM-cul2AX4Y1_wBbNwUhb40pCWzdlg_v6287KQ9ooZasmV9Bl0DTeXzVrPMbZARtRHFAMqTMRbr2HTEOIoPfSwPF&usqp=CAE"
    
      }
      ], {});
 
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('imagens_carrossel', null, {});
  
  }
};
