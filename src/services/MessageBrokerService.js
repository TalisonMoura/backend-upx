const nodemailer = require('nodemailer');
const amqp = require('amqplib');

class MessageBrokerService {

    async sendMessageToQueue(message) {
        const connection = await amqp.connect(rabbitMQConfig.url);
        const channel = await connection.createChannel();
        const queue = rabbitMQConfig.queue;

        channel.assertQueue(queue, { durable: false });
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));

        setTimeout(() => connection.close(), 500);
    };

    async receivedAndSendEmail() {
        const connection = await amqp.connect(rabbitMQConfig.url);
        const channel = await connection.createChannel();
        const queue = rabbitMQConfig.queue;

        channel.assertQueue(queue, { durable: false });
        console.log(`Aguardando mensagens na fila ${queue}`);

        channel.consume(queue, (message) => {
            const user = JSON.parse(message.content.toString());
            sendWelcomeEmail(user);
        }, { noAck: true });
    };

    async sendEmail(department) {
        const transporter = nodemailer.createTransport(emailConfig);

        const mailOptions = {
        from: 'keepcontrol@gmail.com',
        to: 'keepcontrolcompras@gmail.com',
        subject: 'Materiais para cotação',
        text: `Olá, seque a lista para cotação de materiais para manutenção:\n${department.materials}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error('Erro ao enviar o email:', error);
            } else {
              console.log('Email enviado:', info.response);
            }
        });
    }
}

module.exports = new MessageBrokerService();