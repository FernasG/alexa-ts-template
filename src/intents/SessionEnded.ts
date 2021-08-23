import { getRequestType, HandlerInput, RequestHandler } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

export const SessionEnded: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        return getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput: HandlerInput): Response {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);

        return handlerInput.responseBuilder.getResponse();
    }
}