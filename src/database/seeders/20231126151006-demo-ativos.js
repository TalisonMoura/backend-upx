'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    return queryInterface.bulkInsert('Ativos', [
      {
        id: "e3da7a0b-2d6f-4157-b7ac-df6b733737bd",
        userId: "f2a8e1d9-1b8c-4a75-9f3d-2c7fe6e1a5d3",
        name: "Ressonância Magnética",
        numserie: "RM-1150-PQR",
        manufacturer: "Quantum Imaging Systems",
        tipo: "Médio porte",
        model: "standard",
        department: "Radiologia",
        location: "5º andar",
        manufacturingDate: "2023-12-01T08:45:00.000Z",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'a2f7e1c8-6d3b-4e5f-87a9-1b5f492d8c5a',
        userId: "c9d8a7e6-4a1f-4ea1-bdd8-86512c8b14a3",
        name: "Tomografia Computadorizada",
        numserie: "TC-1234-ABC",
        manufacturer: "NovaScan Technologies",
        tipo: "Médio porte",
        model: "standard",
        department: "Radiologia",
        location: "6º andar",
        manufacturingDate: "2023-11-30T15:20:00.000Z",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3c9d8a76-2e43-4d5c-983f-7b6f1a8e2d0f',
        userId: "e5f3c9d2-b1e2-4b8a-b1c1-5a3f8e6c9d2b",
        name: "Mamógrafo Digital",
        numserie: "MD-6789-GHI",
        manufacturer: "Precision Medical Imaging",
        tipo: "Médio porte",
        model: "standard",
        department: "Radiologia",
        location: "1º andar",
        manufacturingDate: "2023-11-29T18:10:00.000Z",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'e0b6f3d9-8c5a-4231-b22c-59fdca1487e7',
        userId: "e5f3c9d2-b1e2-4b8a-b1c1-5a3f8e6c9d2b",
        name: "Endoscópio",
        numserie: "EN-2345-ABC",
        manufacturer: "OptiScope Medical Devices",
        tipo: "Médio porte",
        model: "standard",
        department: "Gastroenterologia",
        location: "3º andar",
        manufacturingDate: "2023-11-28T22:05:00.000Z",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '7f1e6b38-9a4d-4528-83c7-af2dfce1c490',
        userId: "e5f3c9d2-b1e2-4b8a-b1c1-5a3f8e6c9d2b",
        name: "Ventilador Mecânico",
        numserie: "VM-2003-007",
        manufacturer: "AeroMed Technologies",
        tipo: "Médio porte",
        model: "standard",
        department: "Terapia Intensiva",
        location: "3º andar",
        manufacturingDate: "2023-11-27T09:30:00.000Z",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2d8b9fc4-6a1f-4ea1-bdd8-86512c8b14a3',
        userId: "a8d9e5a1-2b1e-4b8a-b1c1-5a3f8e6c9d2b",
        name: "Acelerador Linear",
        numserie: "AC-2043-026",
        manufacturer: "Radiant Therapy Solutions",
        tipo: "Médio porte",
        model: "standard",
        department: "Oncologia",
        location: "5º andar",
        manufacturingDate: "2023-11-26T14:15:00.000Z",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'c5a91d7f-804e-4e26-94c0-8f7c2e5dbff6',
        userId: "a8d9e5a1-2b1e-4b8a-b1c1-5a3f8e6c9d2b",
        name: "Monitor Cardíaco",
        numserie: "MC-2023-001",
        manufacturer: "CardioTech Innovations",
        tipo: "Médio porte",
        model: "standard",
        department: "Cardiologia",
        location: "4º andar",
        manufacturingDate: "2023-11-24T11:00:00.000Z",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'f6e2a8d9-1b8c-4a75-9f3d-2c7fe6e1a5d3',
        userId: "a8d9e5a1-2b1e-4b8a-b1c1-5a3f8e6c9d2b",
        name: "Hemodinâmica",
        numserie: "HC-2023-004",
        manufacturer: "Vascular Dynamics Systems",
        tipo: "Médio porte",
        model: "standard",
        department: "Cardiologia Intervencionista",
        location: "7º andar",
        manufacturingDate: "2023-11-23T20:45:00.000Z",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'b3f5e9d7-4c8a-1e2b-8a2c-5bafce9d7a1b',
        userId: "1e2b8c5a-1d9e-4b8a-b1c1-5a3f8e6c9d2b",
        name: "Bomba de Infusão",
        numserie: "BI-2020-005",
        manufacturer: "InfuseMed Devices",
        tipo: "Médio porte",
        model: "standard",
        department: "Enfermaria",
        location: "3º andar",
        manufacturingDate: "2023-11-22T05:55:00.000Z",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'b3f5e9d7-4c8a-1e2b-8a2c-5bafce9d7a1b',
        userId: "1e2b8c5a-1d9e-4b8a-b1c1-5a3f8e6c9d2b",
        name: "Ultrassom Diagnóstico",
        numserie: "UD-3456-XYZ",
        manufacturer: "SonicVision Technologies",
        tipo: "Médio porte",
        model: "standard",
        department: "Obstetrícia",
        location: "8º andar",
        manufacturingDate: "2023-11-22T05:55:00.000Z",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ativos', null, {truncate: true});
  }
};
