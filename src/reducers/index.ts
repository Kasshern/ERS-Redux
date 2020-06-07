import { Ticket } from "../models/Ticket";
import { combineReducers } from "redux";
import { ticketReducer } from "./ticket.reducer"

//aggregated state as a class
export interface Istate {
    ticketState: TicketState;
}

export interface TicketState {
ticket: Ticket | undefined;
collectedTickets: Ticket[];
}


export const state = combineReducers({
    ticketState: ticketReducer
})