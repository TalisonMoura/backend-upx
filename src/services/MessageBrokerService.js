const nodemailer = require('nodemailer');
class MessageBrokerService {
   
    async sender(message) {
        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.FROM_EMAIL,
                pass: process.env.EMAIL_PASS,
            }
        });

        transport.sendMail({
            from: `Keep Control <${process.env.FROM_EMAIL}>`,
            to: process.env.TO_EMAIL,
            subject: 'Orçamento para cotação de materiais',
            html: `<h1>Lista para cotação</h1> <p>${message}</p>`,
        })
        .then(() => console.log('Email enviado com sucesso'))
        .catch(() => console.log('Erro ao enviar email: ', err));
    }
}

module.exports = new MessageBrokerService();