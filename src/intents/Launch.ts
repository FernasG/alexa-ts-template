import { HandlerInput, RequestHandler, getRequestType } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

export const Launch: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        return getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput: HandlerInput): Response {
        const speakOutput = 'Olá colega, seja muito bem vindo ao mundo das Assistentes Virtuais!';
        const repromt = 'O que deseja saber?'

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(repromt)
            .getResponse();
    }
}