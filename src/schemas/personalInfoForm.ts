import {z} from 'zod';

export const personalInfoSchema = z.object({
    first_name: z.string().nonempty(),
    last_name: z.string().nonempty(),
    email: z.string().email(),
    DateOfBirth: z.string().nonempty(),
    currentLocation: z.string().nonempty(),
    phoneNumber: z.string().nonempty(),
    resume: z.instanceof(File)
})

export type personalInfoSchemaType = z.infer<typeof personalInfoSchema>;