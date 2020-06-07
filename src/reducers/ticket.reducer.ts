import { TicketState } from ".";
import { TicketActionPayload, ticketActionTypes } from "../actions/ticket.actions";
import { Action } from "redux";

const initialState: TicketState = {
    ticket: undefined,
    collectedTickets: []
}

export const ticketReducer = (state: TicketState = initialState,
                                action: TicketActionPayload & Action) => {
    switch(action.type) {
        case ticketActionTypes.ADD_TICKET: {
            let ticketArray = state.collectedTickets;
            ticketArray = [...ticketArray, action.payload.ticket]
            return {
                ...state,
                collectedTickets: ticketArray
            }
        }
        case ticketActionTypes.VIEW_TICKETS: {
            return {
                ...state,
                
            }
        }
        default: return state;
    }
}