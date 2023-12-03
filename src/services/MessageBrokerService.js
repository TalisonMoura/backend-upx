const nodemailer = require('nodemailer');
class MessageBrokerService {
   
    async sender(materials) {
        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.FROM_EMAIL,
                pass: process.env.EMAIL_PASS,
            }
        });

        // Será uma possivel implementação caso o front consiga retornar um array de objetos do tipo quantity e name
        const htmlContent = await this.generateHTML(materials);

        transport.sendMail({
            from: `Keep Control <${process.env.FROM_EMAIL}>`,
            to: process.env.TO_EMAIL,
            subject: 'Orçamento para cotação de materiais',
            html: htmlContent //`<h1>Lista para cotação</h1> <p>${materials}</p>`,
        })
        .then(() => console.log('Email enviado com sucesso'))
        .catch(() => console.log('Erro ao enviar email: ', err));
    }

    async generateHTML(materials) {
        const itemsHTML = materials.map((material) => `<li>Nome: ${material.name}, Quantidade: ${material.quantity}</li>`).join('');
        return `<h2>Lista para cotação</h2><ol style="font-size: 16px;">${itemsHTML}</ol>`;
    }
}

module.exports = new MessageBrokerService();