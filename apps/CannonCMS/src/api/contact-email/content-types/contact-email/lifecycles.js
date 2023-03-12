module.exports = {
    async afterCreate(event) {
        const {result} = event

        try {
            await strapi.plugins['email'].services.email.send({
                to: 'contact@cannoncamperconversions.com',
                from: result.email,
                subject: result.subject,
                text: `full name: ${result.firstName} ${result.lastName}
                email: ${result.email}
                number: ${result.number}
                message: ${result.message}
                `
            })
        } catch (error) {
            console.log(error);
            
        }
    }
}