export function FeedBack(message: string) {
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function(...args: any[]) {
            try {
                const result = await originalMethod.apply(this, args);
                // Show feedback (alert, toast, etc.) with the provided message
                alert(message);
                return result;
            } catch (error) {
                // Handle error if needed
                console.error('Error:', error);
                throw error;
            }
        };

        return descriptor;
    }
}