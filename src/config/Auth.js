module.exports = {
    secret: "1bafb791a115ccbefasaeassscs5c5b961400af2eab8b3ecb68b2f63e5685f2b1739ab09afb",
    expireIn: "6h",
    rabbitMQConfig: {
        url: process.env.RABBITMQ_URL,
        queue: process.env.RABBITMQ_QUEUE,
    },
      emailConfig: {
        service: process.env.EMAIL_SERVICE,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
    },
};