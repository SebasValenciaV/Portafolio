module.exports = {

"[project]/.next-internal/server/app/api/chat/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route.runtime.dev.js [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[project]/app/api/chat/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
let bot;
let conversationLog = [];
// Función para leer los comandos disponibles desde un archivo JSON externo
async function getAvailableCommands() {
    try {
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'data', 'availableCommands.json');
        const data = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error al leer el archivo de comandos disponibles:', error);
        // Fallback a un listado por defecto
        return [
            "hello / hi / greetings / hola / buenos días",
            "what is programming / ¿qué es la programación?",
            "explain software development / explica el desarrollo de software",
            "what is full-stack development / ¿qué es el desarrollo full-stack?",
            "explain object-oriented programming / explica la programación orientada a objetos",
            "explain functional programming / explica la programación funcional",
            "what is agile methodology / ¿qué es la metodología ágil?",
            "explain scrum / explica scrum",
            "explain kanban / explica kanban",
            "explain microservices / explica microservicios",
            "what is cloud computing / ¿qué es cloud computing?",
            "explain containerization / explica containerización",
            "what is devops / ¿qué es devops?",
            "explain cybersecurity / explica ciberseguridad",
            "what is data science / ¿qué es data science?",
            "explain machine learning / explica machine learning",
            "explain deep learning / explica deep learning",
            "explain big data / explica big data",
            "explain iot / explica iot",
            "explain rest apis / explica rest apis",
            "explain graphql / explica graphql",
            "explain serverless architecture / explica arquitectura serverless",
            "explain python / explica python",
            "explain react / explica react",
            "explain node / explica node",
            "explain mongo / explica mongo",
            "explain sqlite / explica sqlite",
            "explain django / explica django",
            "reset / resetear",
            "help / ayuda"
        ];
    }
}
// Función para cargar los scripts de RiveScript desde archivos externos
async function loadBot() {
    if (!bot) {
        const module = await __turbopack_context__.r("[project]/node_modules/rivescript/src/rivescript.js [app-route] (ecmascript, async loader)")(__turbopack_context__.i);
        const RiveScriptLib = module.default;
        bot = new RiveScriptLib({
            utf8: true
        });
        // Cargar todos los archivos .rive de la carpeta "data/botScripts"
        const botsPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'data', 'botScripts');
        await bot.loadDirectory(botsPath);
        await bot.sortReplies();
    }
}
async function POST(request) {
    try {
        const { question } = await request.json();
        await loadBot();
        const availableCommands = await getAvailableCommands();
        const lowerQ = question.trim().toLowerCase();
        // Comando de reset: limpia el historial
        if (lowerQ === "reset" || lowerQ === "resetear") {
            conversationLog = [];
            const resetMsg = lowerQ === "reset" ? "Conversation has been reset." : "La conversación ha sido reseteada.";
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                reply: resetMsg,
                availableCommands,
                conversationLog
            });
        }
        // Comando de ayuda: retorna un mensaje fijo
        if (lowerQ === "help" || lowerQ === "ayuda") {
            const helpMsg = "Escribe algunos de los comandos disponibles.";
            conversationLog.push({
                user: "User",
                question,
                reply: helpMsg
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                reply: helpMsg,
                availableCommands,
                conversationLog
            });
        }
        // Para otros comandos, utiliza RiveScript para obtener la respuesta
        const reply = await bot.reply("local-user", question);
        conversationLog.push({
            user: "User",
            question,
            reply
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            reply,
            availableCommands,
            conversationLog
        });
    } catch (error) {
        console.error("Error en la API del chatbot:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error?.message || "Internal server error"
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__1ea5e91e._.js.map