"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dist_1 = require("@nestjs/config/dist");
const constants_1 = require("./config/constants");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const configService = app.get(dist_1.ConfigService);
    const port = +configService.get(constants_1.SERVER_PORT);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Apis Colonos')
        .setDescription('Apis para Portal y App')
        .setVersion('1.0.0')
        .addTag('auth')
        .addTag('estado')
        .addTag('fraccionamiento')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('documentation', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map