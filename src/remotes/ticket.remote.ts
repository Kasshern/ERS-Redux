import { internalAxios } from './internal-axios'
import { Ticket } from '../models/Ticket';

/*
export const getPokemon = async (id: number) => {
    const response = await Axios.get<PokeAPIPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon: Pokemon = {
        id: response.data.id,
        name: response.data.name,
        img: response.data.sprites.front_default
    }
    return pokemon;
}
*/

export const getAllTickets = async () => {
    const response = await internalAxios.get<Ticket[]>('/employee');
    return response.data.map(ticket => {
        // Replace string birthdate with Date object
        return ticket;
    });
}

export const getTicketById = async (id: number) => {
    const response = await internalAxios.get<Ticket[]>(`/employee/${id}/reimbursement`);
    return response.data.map(ticket => {
        // Replace string birthdate with Date object
        return ticket;
    });
}

/*
export const getTicketById = async (id: number) => {
    const response = await internalAxios.get<Ticket>('/employee');
    const ticket: Ticket = {
        reimbId: response.data.reimbId,
        reimbAmount: response.data.reimbAmount,
        reimbSubmitted: response.data.reimbSubmitted,
        reimbResolved: response.data.reimbResolved,
        reimbDescription: response.data.reimbDescription,
        reimbReceipt: response.data.reimbReceipt,
        reimbAuthor: response.data.reimbAuthor,
        reimbResolver: response.data.reimbResolver,
        reimbStatusId: response.data.reimbStatusId,
        reimbTypeId: response.data.reimbTypeId,
        reimbStatus: response.data.reimbStatus
    }
    return ticket;
}
*/

export const createTicket = async (ticket: Ticket) => {
    const response = await internalAxios.post('/employee/reimbursement', ticket);
    return true;
}