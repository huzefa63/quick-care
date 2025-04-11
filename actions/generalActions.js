'use server';

const { revalidatePath } = require("next/cache");

export async function revalidateAppointments() {
    revalidatePath('app/appointments');
}