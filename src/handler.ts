import * as Alexa from 'ask-sdk-core';
import { 
    Launch, 
    HelloWorld,
    SessionEnded,
    ErrorProcessor
} from './intents';

const handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        Launch,
        HelloWorld,
        SessionEnded
    )
    .addErrorHandlers(
        ErrorProcessor
    )
    .withApiClient(
        new Alexa.DefaultApiClient()
    )
    .create();

export default handler;