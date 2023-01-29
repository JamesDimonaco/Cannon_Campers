module.exports = {
    async afterCreate(event) {
        const {result} = event

        try {
            await strapi.plugins['email'].services.email.send({
                to: 'admin@cannoncamperconversions.com',
                from: 'admin@cannoncamperconversions.com',
                subject: result.subject,
                text: `name: ${result.name}
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