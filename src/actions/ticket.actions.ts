import { Dispatch } from "react"
import { Action } from "redux"
import { Ticket } from "../models/Ticket"


export const ticketActionTypes = {
    ADD_TICKET: 'ADD_TICKET',
    VIEW_TICKETS: 'VIEW_TICKETS'

}

export interface TicketActionPayload {
    payload: {
        ticket: Ticket;
    }
}

export const addTicket = (ticket: Ticket) => (dispatch: Dispatch<TicketActionPayload & Action>) => {
    dispatch({
        type: ticketActionTypes.ADD_TICKET,
        payload: {
            ticket
        }
    })
}

export const viewTickets = () => (dispatch: Dispatch<Action>) => {
    dispatch({
        type: ticketActionTypes.VIEW_TICKETS
    })
}