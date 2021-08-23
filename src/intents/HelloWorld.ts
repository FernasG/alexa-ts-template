import { HandlerInput, RequestHandler, getRequestType, getIntentName } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

export const HelloWorld: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        return getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput: HandlerInput): Response {
        const speakOutput = 'Olá mundo.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
}