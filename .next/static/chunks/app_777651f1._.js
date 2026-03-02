(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_777651f1._.js", {

"[project]/app/components/MatrixCanvas.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MatrixCanvas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function MatrixCanvas() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MatrixCanvas.useEffect": ()=>{
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            const backgroundImage = new Image();
            backgroundImage.src = "/3.png";
            const matrixChars = "10101010110101010100110天地玄黄宇宙洪荒セバスチャンバレンシアバルガス|||";
            const charsArray = matrixChars.split("");
            const fontSize = 28;
            let columns;
            let drops = [];
            // Variables para la animación de ojo abierto
            let openProgress = 0; // 0 = párpados cerrados, 1 = totalmente abiertos
            let opening = true;
            const resizeCanvas = {
                "MatrixCanvas.useEffect.resizeCanvas": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    columns = Math.floor(canvas.width / fontSize) * 3;
                    drops = Array(columns).fill(null).map({
                        "MatrixCanvas.useEffect.resizeCanvas": ()=>({
                                y: Math.random() * (canvas.height / fontSize),
                                char: charsArray[Math.floor(Math.random() * charsArray.length)],
                                speed: 0.1 + Math.random() * 0.2,
                                size: fontSize * (0.5 + Math.random() * 0.5)
                            })
                    }["MatrixCanvas.useEffect.resizeCanvas"]);
                }
            }["MatrixCanvas.useEffect.resizeCanvas"];
            backgroundImage.onload = ({
                "MatrixCanvas.useEffect": ()=>{
                    resizeCanvas();
                    // Pintamos negro inmediato para evitar flash blanco del navegador
                    ctx.fillStyle = "black";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    const draw = {
                        "MatrixCanvas.useEffect.draw": ()=>{
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            // 1) Dibujar contenido base (imagen + Matrix)
                            // Imagen de fondo
                            const scale = Math.max(canvas.width / backgroundImage.width, canvas.height / backgroundImage.height);
                            const sw = backgroundImage.width * scale;
                            const sh = backgroundImage.height * scale;
                            const ox = (canvas.width - sw) / 2;
                            const oy = (canvas.height - sh) / 3;
                            ctx.globalAlpha = 0.3;
                            ctx.filter = "brightness(1.3)";
                            ctx.drawImage(backgroundImage, ox, oy, sw, sh);
                            ctx.filter = "none";
                            ctx.globalAlpha = 1;
                            // Lluvia de caracteres Matrix
                            for(let i = 0; i < drops.length; i++){
                                const drop = drops[i];
                                const fade = Math.max(0, 1 - drop.y / (canvas.height / fontSize));
                                ctx.fillStyle = `rgba(0, 255, 0, ${fade})`;
                                ctx.font = `bold ${drop.size}px monospace`;
                                ctx.fillText(drop.char, i % columns * (fontSize / 3), drop.y * fontSize);
                                if (drop.y * fontSize > canvas.height) {
                                    drops[i] = {
                                        y: 0,
                                        char: charsArray[Math.floor(Math.random() * charsArray.length)],
                                        speed: 0.1 + Math.random() * 0.2,
                                        size: fontSize * (0.5 + Math.random() * 0.5)
                                    };
                                }
                                drops[i].y += drop.speed;
                            }
                            // 2) Si aún estamos abriendo el “ojo”, dibujamos los párpados encima
                            if (opening) {
                                const w = canvas.width;
                                const h = canvas.height;
                                const cx = w / 2;
                                const cy = h / 2;
                                const openY = h / 2 * openProgress; // distancia del centro
                                const curve = 80 * (1 - openProgress); // curvatura de párpado
                                ctx.fillStyle = "black";
                                // Párpado superior
                                ctx.beginPath();
                                ctx.moveTo(0, 0);
                                ctx.lineTo(w, 0);
                                ctx.lineTo(w, cy - openY);
                                ctx.quadraticCurveTo(cx, cy - openY - curve, 0, cy - openY);
                                ctx.closePath();
                                ctx.fill();
                                // Párpado inferior
                                ctx.beginPath();
                                ctx.moveTo(0, h);
                                ctx.lineTo(w, h);
                                ctx.lineTo(w, cy + openY);
                                ctx.quadraticCurveTo(cx, cy + openY + curve, 0, cy + openY);
                                ctx.closePath();
                                ctx.fill();
                                // Avanzar apertura
                                openProgress += 0.02;
                                if (openProgress >= 1) opening = false;
                            }
                            requestAnimationFrame(draw);
                        }
                    }["MatrixCanvas.useEffect.draw"];
                    draw();
                    window.addEventListener("resize", resizeCanvas);
                    return ({
                        "MatrixCanvas.useEffect": ()=>window.removeEventListener("resize", resizeCanvas)
                    })["MatrixCanvas.useEffect"];
                }
            })["MatrixCanvas.useEffect"];
        }
    }["MatrixCanvas.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "matrix-canvas",
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            pointerEvents: "none"
        }
    }, void 0, false, {
        fileName: "[project]/app/components/MatrixCanvas.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_s(MatrixCanvas, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = MatrixCanvas;
var _c;
__turbopack_context__.k.register(_c, "MatrixCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/ProjectsSlider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProjectsSlider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ProjectsSlider() {
    _s();
    const images = [
        "/mongo db.png",
        "/ducaplast.png",
        "/brain capacity.png",
        "/prompts.png",
        "/catalogo.png",
        "/productos.png"
    ];
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectsSlider.useEffect": ()=>{
            const interval = setInterval({
                "ProjectsSlider.useEffect.interval": ()=>{
                    setCurrentIndex({
                        "ProjectsSlider.useEffect.interval": (prevIndex)=>prevIndex === images.length - 1 ? 0 : prevIndex + 1
                    }["ProjectsSlider.useEffect.interval"]);
                }
            }["ProjectsSlider.useEffect.interval"], 3000); // Cambia de imagen cada 3 segundos
            return ({
                "ProjectsSlider.useEffect": ()=>clearInterval(interval)
            })["ProjectsSlider.useEffect"];
        }
    }["ProjectsSlider.useEffect"], [
        images.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "slider-container",
        children: images.map((img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: img,
                alt: `Slide ${index + 1}`,
                className: `slider-image ${index === currentIndex ? "active" : ""}`
            }, index, false, {
                fileName: "[project]/app/components/ProjectsSlider.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/components/ProjectsSlider.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(ProjectsSlider, "tPjzCc9H5UuFdWNuAHYoD0K4UOk=");
_c = ProjectsSlider;
var _c;
__turbopack_context__.k.register(_c, "ProjectsSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/ChatBot.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ChatBot)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ChatBot() {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userQuestion, setUserQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [availableCommands, setAvailableCommands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [conversationLog, setConversationLog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [conversationStarted, setConversationStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Al montar el componente, pedimos "help" para obtener los comandos
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatBot.useEffect": ()=>{
            setConversationLog([]);
            setConversationStarted(false);
            setAvailableCommands([]);
            ({
                "ChatBot.useEffect": async ()=>{
                    try {
                        const res = await fetch("/api/chat", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                question: "reset"
                            })
                        });
                        if (!res.ok) {
                            const errorData = await res.json();
                            throw new Error(errorData.error || "Error fetching help");
                        }
                        const data = await res.json();
                        setAvailableCommands(data.availableCommands || []);
                        setConversationLog(data.conversationLog || []);
                    } catch (error) {
                        console.error("Error fetching help:", error.message);
                    }
                }
            })["ChatBot.useEffect"]();
        }
    }["ChatBot.useEffect"], []);
    // Maneja la pregunta del usuario
    const handleAIClick = async ()=>{
        if (!userQuestion.trim()) return;
        setLoading(true);
        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    question: userQuestion
                })
            });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Error en la solicitud");
            }
            const data = await res.json();
            const lowerQ = userQuestion.trim().toLowerCase();
            if (lowerQ !== "reset" && lowerQ !== "resetear") {
                setConversationStarted(true);
            }
            setConversationLog(data.conversationLog || []);
            setAvailableCommands(data.availableCommands || []);
            setUserQuestion("");
        } catch (error) {
            console.error("Error:", error.message);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ai-container",
        children: [
            availableCommands.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ai-response",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Available Commands:"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ChatBot.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: availableCommands.map((cmd, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: cmd
                            }, index, false, {
                                fileName: "[project]/app/components/ChatBot.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/ChatBot.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ChatBot.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ai-input-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: userQuestion,
                        onChange: (e)=>setUserQuestion(e.target.value),
                        placeholder: "Ask me anything...",
                        className: "ai-input",
                        onKeyDown: (e)=>e.key === "Enter" && handleAIClick()
                    }, void 0, false, {
                        fileName: "[project]/app/components/ChatBot.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAIClick,
                        disabled: loading,
                        className: "ai-ask-btn",
                        children: loading ? "Processing..." : "Ask"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ChatBot.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ChatBot.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            conversationLog.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ai-response",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Conversation:"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ChatBot.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this),
                    conversationLog.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: "1rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "User:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ChatBot.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        entry.question
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ChatBot.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "ChatBot:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ChatBot.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        entry.reply
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ChatBot.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/components/ChatBot.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ChatBot.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ChatBot.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(ChatBot, "YG3bBGz0/vn+zerr3ZD3fxVzUTs=");
_c = ChatBot;
var _c;
__turbopack_context__.k.register(_c, "ChatBot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/curriculum.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CurriculumContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/si/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
function CurriculumContent({ language }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "curriculum-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "curriculum-grid",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "curriculum-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "profile-image",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/Foto gafas.jpeg",
                                alt: "Profile Image",
                                fill: true,
                                style: {
                                    objectFit: "cover"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/curriculum.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/curriculum.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "profile-name",
                            children: "Sebastian Valencia Vargas"
                        }, void 0, false, {
                            fileName: "[project]/app/components/curriculum.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "header-extra",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "profile-description",
                                    children: language === "es" ? "Desarrollador FullStack | Experto en React, Next.js, Node.js y Más" : "FullStack Developer | Expert in React, Next.js, Node.js, and More"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "social-icons-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.linkedin.com/in/sebastian-valencia-v-23506b243/",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "social-link",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/curriculum.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://github.com/SebasValenciaV",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "social-link",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGithub"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/curriculum.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://developersebastianvalencia.blogspot.com",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "social-link",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBloggerB"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/curriculum.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "download-container",
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/curriculum.pdf",
                                                download: true,
                                                className: "download-button",
                                                style: {
                                                    color: "#FFFFFF"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDownload"], {
                                                        size: 20,
                                                        className: "download-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/curriculum.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: language === "es" ? "Descargar Curriculum PDF" : "Download Resume PDF"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/curriculum.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/curriculum.tsx",
                                                lineNumber: 65,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/curriculum.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/curriculum.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "curriculum-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: language === "es" ? "Introducción" : "Introduction"
                        }, void 0, false, {
                            fileName: "[project]/app/components/curriculum.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-text",
                            children: language === "es" ? `Experto en codificación con dominio de diversos lenguajes como Python, PHP, C++, C# y JavaScript, y en frameworks/ Librerias como Next.js, React.js, Node.js Angular .Net y Vite. 
Con una sólida base en estructuras de datos, algoritmos y arquitecturas de software, combinada con metodologías ágiles, resuelvo desafíos complejos de manera eficiente. 
Competente en el diseño tanto de back-end como de front-end, optimizo soluciones de software mediante prácticas de codificación seguras. 
Cuento con experiencia en administración de sistemas, gestión tecnológica y desarrollo de sitios web. 
Mis excepcionales habilidades de liderazgo me permiten organizar tareas y coordinar equipos o departamentos para completar con éxito proyectos en diversos mercados y entornos reales. 
Además, tengo experiencia práctica en el desarrollo de prompts de IA que guían a los modelos para ofrecer una mayor precisión, seguimiento de instrucciones, creatividad, calidad en la escritura y razonamiento, se diseñar e implementar APIs o intercambio de archivos para musica, juegos 2D ó 3D y ChatBots.` : `Expert in coding with proficiency in various languages such as Python, PHP, C++, C#, and JavaScript, and in frameworks such as Next.js React.js Node.js Angular .Net and Vite. 
A solid foundation in data structures, algorithms, and software architectures, combined with agile methodologies, enables me to efficiently solve complex challenges. 
Proficient in both back-end and front-end design, I optimize software solutions through secure coding practices. 
I have experience in systems administration, technology management, and website development. 
My exceptional leadership skills allow me to effectively organize tasks and coordinate teams or departments to successfully complete projects across diverse market and real-life environments. 
Additionally, I have practical experience developing AI prompts that guide models to deliver improved accuracy, instruction following, creativity, writing quality, and reasoning, I can design and implement APIs or file exchange for music, games 2D or 3D and ChatBots.`
                        }, void 0, false, {
                            fileName: "[project]/app/components/curriculum.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/curriculum.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "curriculum-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: language === "es" ? "Experiencia Profesional" : "Professional Experience"
                        }, void 0, false, {
                            fileName: "[project]/app/components/curriculum.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "section-list",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Granity Estudios"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this),
                                        " –",
                                        " ",
                                        language === "es" ? "Webmaster y Soporte Técnico" : "Webmaster & Technical Support",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "(Jun 2023 – Nov 2024)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this),
                                        language === "es" ? "Soporte al cliente, resolucion de problemas, analisis de datos, administracion de plataforma web, informes de casos de investigacion profunda garantizando los derechos de todos los ususarios." : "Specialized in technical support, problem resolution, and ensuring security and efficiency in multiple languages (French, English, Portuguese, German, Russian, Italian, Dutch)."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Ducaplast Sas"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        " –",
                                        " ",
                                        language === "es" ? " Desarrollador Fullstack Freelance " : "FullStack Developer Freelance",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "(Jun 2024 – Nov 2024)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        language === "es" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Desarrollar una plataforma de e-commerce (",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://ducaplast.com.co/",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "link",
                                                    children: "ducaplast.com.co"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/curriculum.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this),
                                                ") utilizando Python y Django (SQLite para desarrollo, PostgreSQL en producción) y HTML, JavaScript, CSS y Bootstrap para un front-end responsivo."
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Developed an e-commerce platform (",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://ducaplast.com.co/",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "link",
                                                    children: "ducaplast.com.co"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/curriculum.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this),
                                                ") using Python and Django (SQLite for development, PostgreSQL in production) and HTML, JavaScript, CSS, and Bootstrap for a responsive front-end."
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Bancolombia"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        " –",
                                        " ",
                                        language === "es" ? " Asesor jurídico independiente " : "Independent legal advisor",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "(Dic 2024  –  Mar 2025)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this),
                                        language === "es" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: "Analizar documentación legal de inmuebles para verificar su validez, identificar irregularidades y garantizar la correcta transferencia de propiedad. elaborando informes jurídicos que respaldan transacciones seguras. "
                                        }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: " Analyze legal property documentation to verify its validity, identify irregularities, and ensure the proper transfer of ownership, while preparing legal reports that support secure transactions."
                                        }, void 0, false)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Avianca Holdings"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        " –",
                                        " ",
                                        language === "es" ? "Técnico de Mantenimiento de Aeronaves" : "Aircraft Maintenance Technician",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "(Sep 2018 – Mar 2020)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        language === "es" ? "Responsable de inspecciones, reparaciones e instalaciones de componentes en aeronaves comerciales y privadas, colaborando con el equipo para obtener resultados de alta calidad." : "Responsible for inspections, repairs, and component installations on commercial and private aircraft, collaborating with the team to deliver high-quality results."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/curriculum.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/curriculum.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "curriculum-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: language === "es" ? "Habilidades Complementarias" : "Skills"
                        }, void 0, false, {
                            fileName: "[project]/app/components/curriculum.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-text",
                            children: language === "es" ? "Experto en TI con experiencia en el diseño y evolución de servicios y arquitecturas innovadoras. Domino el levantamiento de requisitos, la gestión de cambios y el análisis de demanda, complementado por conocimientos en marketing, normativas legales y certificación digital para asegurar la continuidad y seguridad." : "IT expert with proven experience in designing and evolving innovative services and architectures. Skilled in requirements gathering, change management, and demand analysis, complemented by expertise in marketing, legal regulations, and digital certification to ensure the continuity and security of critical systems."
                        }, void 0, false, {
                            fileName: "[project]/app/components/curriculum.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/curriculum.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "curriculum-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: language === "es" ? "Habilidades" : "Skills"
                        }, void 0, false, {
                            fileName: "[project]/app/components/curriculum.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-text",
                            children: language === "es" ? "JavaScript TypeScript Python PHP C++ Next.js React.js Node.js Vite HTML CSS/Bootstrap Django MySQL PostgreSQL MongoDB .NET Angular" : "JavaScript TypeScript Python PHP C++ Next.js React.js Node.js Vite HTML CSS/Bootstrap Django MySQL PostgreSQL MongoDB .NET Angular"
                        }, void 0, false, {
                            fileName: "[project]/app/components/curriculum.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tech-icons",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaJs"], {
                                    title: "JavaScript"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 192,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiTypescript"], {
                                    title: "TypeScript"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 193,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPython"], {
                                    title: "Python"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 194,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPhp"], {
                                    title: "PHP"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 195,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiCplusplus"], {
                                    title: "C++"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 196,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiNextdotjs"], {
                                    title: "Next.js"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 197,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReact"], {
                                    title: "React.js"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 198,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaNode"], {
                                    title: "Node.js"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 199,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiVite"], {
                                    title: "Vite"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 200,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaHtml5"], {
                                    title: "HTML"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 201,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCss3Alt"], {
                                    title: "CSS/Bootstrap"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 202,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiDjango"], {
                                    title: "Django"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 203,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiMysql"], {
                                    title: "MySQL"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 204,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiPostgresql"], {
                                    title: "PostgreSQL"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 205,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiMongodb"], {
                                    title: "MongoDB"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 206,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiDotnet"], {
                                    title: ".NET"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 207,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiAngular"], {
                                    title: "Angular"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 208,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/curriculum.tsx",
                            lineNumber: 191,
                            columnNumber: 3
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/curriculum.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "curriculum-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: language === "es" ? "Educación y Cursos" : "Education & Courses"
                        }, void 0, false, {
                            fileName: "[project]/app/components/curriculum.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "section-list",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Institución Universitaria Pascual Bravo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this),
                                        " –",
                                        " ",
                                        language === "es" ? "Desarrollador de Software (2020 – 2024)" : "Software Developer (2020 – 2024)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Academia Antioqueña de Aviación"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this),
                                        " –",
                                        " ",
                                        language === "es" ? "Técnico en Mantenimiento de Aeronaves (2016 – 2020)" : "Aircraft Maintenance Technician (2016 – 2020)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Colegio La Salle de CampoAmor - Medellín"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this),
                                        " –",
                                        " ",
                                        language === "es" ? "Diploma de Educación Media (2008 – 2015)" : "High School Diploma (2008 – 2015)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "I.E Pascual Bravo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this),
                                        " –",
                                        " ",
                                        language === "es" ? "(POO) Programacion Orientada a Objetos (38 Hrs, 2024)" : "(OOP) Object-Oriented Programming (50 Hrs, 2024)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "I.E Pascual Bravo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, this),
                                        " –",
                                        " ",
                                        language === "es" ? "(POE) Programacion Orientada a Eventos (38 Hrs, 2024)" : "(EDP) Event-Driven  Programming (50 Hrs, 2024)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "I.E Pascual Bravo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 245,
                                            columnNumber: 15
                                        }, this),
                                        " –",
                                        " ",
                                        language === "es" ? "Seguridad Informática / IT Essentials (50 Hrs, 2024)" : "Information Security / IT Essentials (50 Hrs, 2024)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Udemy"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this),
                                        " –",
                                        " ",
                                        language === "es" ? "Desarrollo Web/App Frontend y Backend (100 Hrs, 2024)" : "Front and Backend Web/App Development (38 Hrs, 2024)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Eafit University"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/curriculum.tsx",
                                            lineNumber: 253,
                                            columnNumber: 15
                                        }, this),
                                        " –",
                                        " ",
                                        language === "es" ? "Inglés lvl B2: escritura, lectura y conversación (3 años 2013, 2026)" : "English lvl B2: writing, reading & speaking (3 years 2013, 2026)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/curriculum.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/curriculum.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "curriculum-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: language === "es" ? "Contacto" : "Contact"
                        }, void 0, false, {
                            fileName: "[project]/app/components/curriculum.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-text",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        language === "es" ? "Correo:" : "Email:",
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:sebas19-98@hotmail.com",
                                    className: "link",
                                    children: "sebas19-98@hotmail.com"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/curriculum.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-text",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        language === "es" ? "Teléfono:" : "Phone:",
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/curriculum.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this),
                                "(+57) 316 8859466"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/curriculum.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/curriculum.tsx",
                    lineNumber: 262,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/curriculum.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/curriculum.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = CurriculumContent;
var _c;
__turbopack_context__.k.register(_c, "CurriculumContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/LanguageSwitcher.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LanguageSwitcher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function LanguageSwitcher({ currentLanguage, onSwitch }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "language-switcher",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onSwitch("es"),
                className: currentLanguage === "es" ? "active" : "",
                children: "ESPAÑOL"
            }, void 0, false, {
                fileName: "[project]/app/components/LanguageSwitcher.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onSwitch("en"),
                className: currentLanguage === "en" ? "active" : "",
                children: "ENGLISH"
            }, void 0, false, {
                fileName: "[project]/app/components/LanguageSwitcher.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/LanguageSwitcher.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/Music.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const MusicSection = ()=>{
    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "10px",
        marginTop: "10px"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "music-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Últimas Canciones"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Music.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: gridStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                style: {
                                    borderRadius: "12px"
                                },
                                src: "https://open.spotify.com/embed/track/5S48u4WANuG4m5XmWxTjmZ?utm_source=generator",
                                width: "100%",
                                height: "352",
                                frameBorder: "0",
                                allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
                                allowFullScreen: true,
                                loading: "lazy",
                                title: "Spotify Track 1"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Music.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                style: {
                                    borderRadius: "12px"
                                },
                                src: "https://open.spotify.com/embed/track/76F3MmwmuDABKH3iwriY5S?utm_source=generator",
                                width: "100%",
                                height: "352",
                                frameBorder: "0",
                                allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
                                allowFullScreen: true,
                                loading: "lazy",
                                title: "Spotify Track 2"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Music.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                style: {
                                    borderRadius: "12px"
                                },
                                src: "https://open.spotify.com/embed/track/13BOIDv8bDEJxSKIttxYcI?utm_source=generator",
                                width: "100%",
                                height: "352",
                                frameBorder: "0",
                                allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
                                allowFullScreen: true,
                                loading: "lazy",
                                title: "Spotify Track 3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Music.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Music.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Music.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    marginTop: "40px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Playlists"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Music.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: gridStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                style: {
                                    borderRadius: "12px"
                                },
                                src: "https://open.spotify.com/embed/playlist/5H2dELk8SnXpP6H10I4kS3?utm_source=generator&theme=0",
                                width: "100%",
                                height: "152",
                                frameBorder: "0",
                                allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
                                allowFullScreen: true,
                                loading: "lazy",
                                title: "Spotify Playlist Compact"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Music.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                style: {
                                    borderRadius: "12px"
                                },
                                src: "https://open.spotify.com/embed/playlist/6zNLCtZDI4Hccoo7VZabZs?utm_source=generator&theme=0",
                                width: "100%",
                                height: "152",
                                frameBorder: "0",
                                allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
                                allowFullScreen: true,
                                loading: "lazy",
                                title: "Spotify Playlist Second"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Music.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                style: {
                                    borderRadius: "12px"
                                },
                                src: "https://open.spotify.com/embed/playlist/6OxjwWV1kyXDIkoyD0Yzcw?utm_source=generator",
                                width: "100%",
                                height: "152",
                                frameBorder: "0",
                                allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
                                allowFullScreen: true,
                                loading: "lazy",
                                title: "Spotify Playlist Third"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Music.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Music.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Music.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Music.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
_c = MusicSection;
const __TURBOPACK__default__export__ = MusicSection;
var _c;
__turbopack_context__.k.register(_c, "MusicSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/SpaceShooterGame.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SpaceDodgerGame)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SpaceDodgerGame() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [destroyedPlanets, setDestroyedPlanets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        0: 0,
        1: 0,
        2: 0,
        3: 0
    });
    const [destroyedEnemies, setDestroyedEnemies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [gameOver, setGameOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gameStarted, setGameStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Arma seleccionada para PC
    const [selectedWeapon, setSelectedWeapon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("normal");
    const [resetGame, setResetGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fragments, setFragments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Nueva variable para el diseño de la nave (0 a 5)
    const [shipDesign, setShipDesign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const scoreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const restartGame = ()=>{
        setResetGame((prev)=>prev + 1);
        scoreRef.current = 0;
        setScore(0);
        setDestroyedPlanets({
            0: 0,
            1: 0,
            2: 0,
            3: 0
        });
        setDestroyedEnemies(0);
        setGameOver(false);
        setGameStarted(false);
        setPaused(false);
    };
    // Función para terminar la partida (mostrar resultados)
    const terminateGame = ()=>{
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        setGameOver(true);
    };
    // Función para dibujar la nave del jugador con base en el diseño elegido y el arma integrada
    const drawSpaceshipDesign = (ctx, spaceship, design, weapon)=>{
        ctx.save();
        ctx.translate(spaceship.x, spaceship.y);
        // Cada diseño tendrá forma y colores distintos; se integrará una representación del armamento
        switch(design){
            case 0:
                // Diseño 0: Nave abstracta con formas irregulares y detalles futuristas
                ctx.beginPath();
                ctx.moveTo(0, -spaceship.height * 0.5);
                ctx.bezierCurveTo(-spaceship.width * 0.6, -spaceship.height * 0.3, -spaceship.width * 0.5, spaceship.height * 0.3, 0, spaceship.height * 0.5);
                ctx.bezierCurveTo(spaceship.width * 0.5, spaceship.height * 0.3, spaceship.width * 0.6, -spaceship.height * 0.3, 0, -spaceship.height * 0.5);
                ctx.closePath();
                let grad0 = ctx.createRadialGradient(0, 0, spaceship.width * 0.1, 0, 0, spaceship.width * 0.5);
                grad0.addColorStop(0, "#ff3366");
                grad0.addColorStop(1, "#330000");
                ctx.fillStyle = grad0;
                ctx.fill();
                // Detalle: rayos de energía que irradian desde el centro
                for(let i = 0; i < 8; i++){
                    let angle = i * Math.PI / 4;
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.lineTo(Math.cos(angle) * spaceship.width * 0.6, Math.sin(angle) * spaceship.height * 0.6);
                    ctx.strokeStyle = "#ffcc00";
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }
                break;
            case 1:
                // Diseño 1: Nave geométrica abstracta con ángulos agudos y arma lateral integrada
                ctx.beginPath();
                ctx.moveTo(0, -spaceship.height * 0.45);
                ctx.lineTo(-spaceship.width * 0.55, 0);
                ctx.lineTo(0, spaceship.height * 0.45);
                ctx.lineTo(spaceship.width * 0.55, 0);
                ctx.closePath();
                let grad1 = ctx.createLinearGradient(0, -spaceship.height * 0.45, 0, spaceship.height * 0.45);
                grad1.addColorStop(0, "#6600cc");
                grad1.addColorStop(1, "#000033");
                ctx.fillStyle = grad1;
                ctx.fill();
                // Armamento lateral: pequeños triángulos a ambos lados
                ctx.beginPath();
                ctx.moveTo(-spaceship.width * 0.55, 0);
                ctx.lineTo(-spaceship.width * 0.7, spaceship.height * 0.1);
                ctx.lineTo(-spaceship.width * 0.55, spaceship.height * 0.2);
                ctx.closePath();
                ctx.fillStyle = weapon === "laser" ? "#ff0000" : "#777777";
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(spaceship.width * 0.55, 0);
                ctx.lineTo(spaceship.width * 0.7, -spaceship.height * 0.1);
                ctx.lineTo(spaceship.width * 0.55, -spaceship.height * 0.2);
                ctx.closePath();
                ctx.fill();
                break;
            case 2:
                // Diseño 2: Nave circular abstracta con detalles radiales y cúpula asimétrica
                ctx.beginPath();
                ctx.arc(0, 0, spaceship.width * 0.5, 0, Math.PI * 2);
                let grad2 = ctx.createRadialGradient(0, 0, spaceship.width * 0.2, 0, 0, spaceship.width * 0.5);
                grad2.addColorStop(0, "#00ffcc");
                grad2.addColorStop(1, "#003333");
                ctx.fillStyle = grad2;
                ctx.fill();
                // Detalles radiales: líneas que irradian desde el centro
                ctx.strokeStyle = "#ffffff";
                ctx.lineWidth = 1;
                for(let i = 0; i < 12; i++){
                    let angle = i * (Math.PI * 2 / 12);
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.lineTo(Math.cos(angle) * spaceship.width * 0.5, Math.sin(angle) * spaceship.width * 0.5);
                    ctx.stroke();
                }
                // Cúpula asimétrica: un arco encima de la nave
                ctx.beginPath();
                ctx.arc(0, -spaceship.height * 0.15, spaceship.width * 0.3, Math.PI, 2 * Math.PI);
                ctx.fillStyle = "#cccccc";
                ctx.fill();
                // Cañón central alargado
                ctx.beginPath();
                ctx.rect(-4, -spaceship.height * 0.6, 8, spaceship.height * 0.2);
                ctx.fillStyle = weapon === "spread" ? "#ff9933" : "#111111";
                ctx.fill();
                break;
            case 3:
                // Diseño 3: Nave angular abstracta con forma de diamante y doble cañón
                ctx.beginPath();
                ctx.moveTo(-spaceship.width * 0.5, 0);
                ctx.lineTo(0, -spaceship.height * 0.5);
                ctx.lineTo(spaceship.width * 0.5, 0);
                ctx.lineTo(0, spaceship.height * 0.5);
                ctx.closePath();
                let grad3 = ctx.createLinearGradient(-spaceship.width * 0.5, 0, spaceship.width * 0.5, 0);
                grad3.addColorStop(0, "#009944");
                grad3.addColorStop(1, "#004422");
                ctx.fillStyle = grad3;
                ctx.fill();
                // Doble cañón: en la punta superior e inferior
                ctx.beginPath();
                ctx.rect(-3, -spaceship.height * 0.5 - 12, 6, 12);
                ctx.fillStyle = weapon === "laser" ? "#ff0000" : "#333333";
                ctx.fill();
                ctx.beginPath();
                ctx.rect(-3, spaceship.height * 0.5, 6, 12);
                ctx.fill();
                // Líneas diagonales para dar un toque abstracto
                ctx.strokeStyle = "#ffffff";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(-spaceship.width * 0.5, 0);
                ctx.lineTo(0, spaceship.height * 0.5);
                ctx.moveTo(spaceship.width * 0.5, 0);
                ctx.lineTo(0, spaceship.height * 0.5);
                ctx.stroke();
                break;
            case 4:
                // Diseño 4: Nave retro-pixel abstracta con patrón irregular y "armamento" digital
                ctx.fillStyle = "#ff66cc";
                ctx.fillRect(-spaceship.width * 0.5, -spaceship.height * 0.5, spaceship.width, spaceship.height);
                // Patrón pixelado abstracto
                ctx.fillStyle = "#000000";
                for(let i = -spaceship.width * 0.5; i < spaceship.width * 0.5; i += 10){
                    for(let j = -spaceship.height * 0.5; j < spaceship.height * 0.5; j += 10){
                        if (Math.random() < 0.2) {
                            ctx.fillRect(i, j, 4, 4);
                        }
                    }
                }
                // "Arma" pixelada: rectángulo en la parte inferior central
                ctx.fillStyle = weapon === "laser" ? "#ff0000" : "#222222";
                ctx.fillRect(-spaceship.width * 0.15, spaceship.height * 0.2, spaceship.width * 0.3, 6);
                break;
            case 5:
                // Diseño 5: Nave futurista abstracta con efecto de neón y contornos irregulares
                ctx.beginPath();
                ctx.moveTo(0, -spaceship.height * 0.5);
                ctx.lineTo(-spaceship.width * 0.6, -spaceship.height * 0.1);
                ctx.lineTo(-spaceship.width * 0.4, spaceship.height * 0.5);
                ctx.lineTo(spaceship.width * 0.4, spaceship.height * 0.5);
                ctx.lineTo(spaceship.width * 0.6, -spaceship.height * 0.1);
                ctx.closePath();
                let grad5 = ctx.createLinearGradient(0, -spaceship.height * 0.5, 0, spaceship.height * 0.5);
                grad5.addColorStop(0, "#44ffff");
                grad5.addColorStop(1, "#004444");
                ctx.fillStyle = grad5;
                ctx.fill();
                // Contorno de neón brillante
                ctx.strokeStyle = "#ff00ff";
                ctx.lineWidth = 3;
                ctx.stroke();
                // "Barriga de cañones": rectángulo central y dos laterales
                ctx.beginPath();
                ctx.rect(-spaceship.width * 0.4, spaceship.height * 0.25, spaceship.width * 0.8, 8);
                ctx.fillStyle = weapon === "spread" ? "#ff9933" : "#ff00ff";
                ctx.fill();
                ctx.beginPath();
                ctx.rect(-spaceship.width * 0.6, spaceship.height * 0.1, 6, spaceship.height * 0.3);
                ctx.rect(spaceship.width * 0.6 - 6, spaceship.height * 0.1, 6, spaceship.height * 0.3);
                ctx.fill();
                break;
            default:
                break;
        }
        ctx.restore();
    };
    // Función para dibujar una vista previa en miniatura de la nave
    const drawSpaceshipPreview = (ctx, design, weapon)=>{
        // Dibujamos la nave centrada en el canvas de preview (60x60)
        const previewShip = {
            x: 30,
            y: 30,
            width: 40,
            height: 50
        };
        drawSpaceshipDesign(ctx, previewShip, design, weapon);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpaceDodgerGame.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            // Dimensiones internas fijas
            const baseWidth = 800;
            const baseHeight = 600;
            canvas.width = baseWidth;
            canvas.height = baseHeight;
            // Prevenir scroll en dispositivos táctiles
            canvas.style.touchAction = "none";
            canvas.addEventListener("touchstart", {
                "SpaceDodgerGame.useEffect": (e)=>e.preventDefault()
            }["SpaceDodgerGame.useEffect"], {
                passive: false
            });
            canvas.addEventListener("touchmove", {
                "SpaceDodgerGame.useEffect": (e)=>e.preventDefault()
            }["SpaceDodgerGame.useEffect"], {
                passive: false
            });
            let tapCount = 0;
            let lastTapTime = 0;
            const tapDelay = 300;
            const shootShot = {
                "SpaceDodgerGame.useEffect.shootShot": (weaponType)=>{
                    if (!canShoot) return;
                    if (weaponType === "normal") {
                        bullets.push({
                            x: spaceship.x,
                            y: spaceship.y - spaceship.height / 2,
                            radius: 5,
                            speed: 9,
                            type: "normal"
                        });
                    } else if (weaponType === "spread") {
                        const angles = [
                            -0.1,
                            0,
                            0.1
                        ];
                        angles.forEach({
                            "SpaceDodgerGame.useEffect.shootShot": (ang)=>{
                                bullets.push({
                                    x: spaceship.x,
                                    y: spaceship.y - spaceship.height / 2,
                                    radius: 4,
                                    speed: 9,
                                    angle: ang,
                                    type: "spread"
                                });
                            }
                        }["SpaceDodgerGame.useEffect.shootShot"]);
                    } else if (weaponType === "laser") {
                        bullets.push({
                            x: spaceship.x,
                            y: spaceship.y - spaceship.height / 2,
                            radius: 2,
                            speed: 20,
                            type: "laser"
                        });
                    }
                    canShoot = false;
                    setTimeout({
                        "SpaceDodgerGame.useEffect.shootShot": ()=>{
                            canShoot = true;
                        }
                    }["SpaceDodgerGame.useEffect.shootShot"], 300);
                }
            }["SpaceDodgerGame.useEffect.shootShot"];
            const smoothingFactor = 0.15;
            let targetPosition = {
                x: baseWidth / 2,
                y: baseHeight - 120
            };
            const updateSpaceshipPosition = {
                "SpaceDodgerGame.useEffect.updateSpaceshipPosition": (e)=>{
                    if (e.touches.length > 1) return;
                    const touch = e.touches[0];
                    const rect = canvas.getBoundingClientRect();
                    const scaleX = canvas.width / rect.width;
                    const scaleY = canvas.height / rect.height;
                    targetPosition.x = (touch.clientX - rect.left) * scaleX;
                    targetPosition.y = (touch.clientY - rect.top) * scaleY;
                }
            }["SpaceDodgerGame.useEffect.updateSpaceshipPosition"];
            canvas.addEventListener("touchstart", updateSpaceshipPosition, {
                passive: false
            });
            canvas.addEventListener("touchmove", updateSpaceshipPosition, {
                passive: false
            });
            const handleTouchEnd = {
                "SpaceDodgerGame.useEffect.handleTouchEnd": (e)=>{
                    e.preventDefault();
                    const currentTime = Date.now();
                    if (currentTime - lastTapTime < tapDelay) {
                        tapCount++;
                    } else {
                        tapCount = 1;
                    }
                    lastTapTime = currentTime;
                    setTimeout({
                        "SpaceDodgerGame.useEffect.handleTouchEnd": ()=>{
                            if (Date.now() - lastTapTime >= tapDelay) {
                                if (tapCount === 1) {
                                    shootShot("normal");
                                } else if (tapCount === 2) {
                                    shootShot("spread");
                                } else if (tapCount >= 3) {
                                    shootShot("laser");
                                }
                                tapCount = 0;
                            }
                        }
                    }["SpaceDodgerGame.useEffect.handleTouchEnd"], tapDelay);
                }
            }["SpaceDodgerGame.useEffect.handleTouchEnd"];
            canvas.addEventListener("touchend", handleTouchEnd, {
                passive: false
            });
            const numStars = 100;
            const stars = [];
            for(let i = 0; i < numStars; i++){
                stars.push({
                    x: Math.random() * baseWidth,
                    y: Math.random() * baseHeight,
                    radius: Math.random() * 1.5 + 0.5
                });
            }
            const spaceship = {
                x: baseWidth / 2,
                y: baseHeight - 120,
                width: 50,
                height: 70,
                speed: 6
            };
            let bullets = [];
            let obstacles = [];
            let enemies = [];
            let enemyBullets = [];
            let keys = {};
            let canShoot = true;
            const keyDownHandler = {
                "SpaceDodgerGame.useEffect.keyDownHandler": (e)=>{
                    if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight") {
                        e.preventDefault();
                    }
                    keys[e.key] = true;
                }
            }["SpaceDodgerGame.useEffect.keyDownHandler"];
            const keyUpHandler = {
                "SpaceDodgerGame.useEffect.keyUpHandler": (e)=>{
                    keys[e.key] = false;
                }
            }["SpaceDodgerGame.useEffect.keyUpHandler"];
            document.addEventListener("keydown", keyDownHandler, false);
            document.addEventListener("keyup", keyUpHandler, false);
            let obstacleTimer = 0;
            const obstacleInterval = 150;
            const createObstacle = {
                "SpaceDodgerGame.useEffect.createObstacle": ()=>{
                    const radius = 20 + Math.random() * 50;
                    const x = Math.random() * (baseWidth - 2 * radius) + radius;
                    const y = -radius;
                    const baseSpeedLevels = [
                        0.6,
                        1.2,
                        1.8,
                        2.4
                    ];
                    let speedMultiplier = 1;
                    if (scoreRef.current >= 6000) {
                        speedMultiplier = 2;
                    } else if (scoreRef.current >= 3000) {
                        speedMultiplier = 1.5;
                    }
                    const speed = baseSpeedLevels[Math.floor(Math.random() * baseSpeedLevels.length)] * speedMultiplier;
                    const design = Math.floor(Math.random() * 4);
                    let grad;
                    if (design === 0) {
                        grad = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius);
                        grad.addColorStop(0, "#a0c8ff");
                        grad.addColorStop(0.5, "#5080d0");
                        grad.addColorStop(1, "#203060");
                    } else if (design === 1) {
                        grad = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius);
                        grad.addColorStop(0, "#ffddaa");
                        grad.addColorStop(0.5, "#ffaa55");
                        grad.addColorStop(1, "#aa5500");
                    } else if (design === 2) {
                        grad = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius);
                        grad.addColorStop(0, "#ccffcc");
                        grad.addColorStop(0.5, "#66cc66");
                        grad.addColorStop(1, "#009900");
                    } else {
                        grad = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius);
                        grad.addColorStop(0, "#ffd1dc");
                        grad.addColorStop(0.5, "#ff69b4");
                        grad.addColorStop(1, "#c71585");
                    }
                    obstacles.push({
                        x,
                        y,
                        radius,
                        speed,
                        gradient: grad,
                        design
                    });
                }
            }["SpaceDodgerGame.useEffect.createObstacle"];
            let enemyTimer = 0;
            let enemyInterval = 600;
            const createEnemy = {
                "SpaceDodgerGame.useEffect.createEnemy": ()=>{
                    const width = 40;
                    const height = 40;
                    const x = Math.random() * (baseWidth - width) + width / 2;
                    const y = -height;
                    let enemySpeed = 1.5;
                    if (scoreRef.current >= 6000) {
                        enemySpeed = 3;
                    } else if (scoreRef.current >= 3000) {
                        enemySpeed = 2;
                    }
                    enemies.push({
                        x,
                        y,
                        width,
                        height,
                        speed: enemySpeed,
                        shootTimer: 0
                    });
                }
            }["SpaceDodgerGame.useEffect.createEnemy"];
            const drawBackground = {
                "SpaceDodgerGame.useEffect.drawBackground": ()=>{
                    const bgGrad = ctx.createLinearGradient(0, 0, 0, baseHeight);
                    bgGrad.addColorStop(0, "#000030");
                    bgGrad.addColorStop(1, "#000000");
                    ctx.fillStyle = bgGrad;
                    ctx.fillRect(0, 0, baseWidth, baseHeight);
                    stars.forEach({
                        "SpaceDodgerGame.useEffect.drawBackground": (star)=>{
                            star.y += 0.3;
                            if (star.y > baseHeight) {
                                star.y = 0;
                                star.x = Math.random() * baseWidth;
                            }
                            ctx.beginPath();
                            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                            ctx.fillStyle = "white";
                            ctx.fill();
                        }
                    }["SpaceDodgerGame.useEffect.drawBackground"]);
                }
            }["SpaceDodgerGame.useEffect.drawBackground"];
            const drawSpaceship = {
                "SpaceDodgerGame.useEffect.drawSpaceship": ()=>{
                    // Se utiliza el diseño elegido por el usuario (shipDesign) y el arma seleccionada
                    drawSpaceshipDesign(ctx, spaceship, shipDesign, selectedWeapon);
                }
            }["SpaceDodgerGame.useEffect.drawSpaceship"];
            const drawBullet = {
                "SpaceDodgerGame.useEffect.drawBullet": (bullet)=>{
                    ctx.beginPath();
                    if (bullet.type === "laser") {
                        ctx.strokeStyle = "#ff0000";
                        ctx.lineWidth = 4;
                        ctx.moveTo(bullet.x, bullet.y);
                        ctx.lineTo(bullet.x, bullet.y - 50);
                        ctx.stroke();
                    } else {
                        ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
                        ctx.fillStyle = bullet.type === "spread" ? "#ff9933" : "#ff3333";
                        ctx.fill();
                    }
                    ctx.closePath();
                }
            }["SpaceDodgerGame.useEffect.drawBullet"];
            const drawObstacle = {
                "SpaceDodgerGame.useEffect.drawObstacle": (obs)=>{
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(obs.x, obs.y, obs.radius, 0, Math.PI * 2);
                    ctx.fillStyle = obs.gradient;
                    ctx.fill();
                    ctx.beginPath();
                    ctx.ellipse(obs.x, obs.y, obs.radius * 1.2, obs.radius * 0.4, Math.PI / 4, 0, Math.PI * 2);
                    ctx.strokeStyle = "rgba(255,255,255,0.3)";
                    ctx.lineWidth = 2;
                    ctx.stroke();
                    ctx.restore();
                }
            }["SpaceDodgerGame.useEffect.drawObstacle"];
            const drawFragment = {
                "SpaceDodgerGame.useEffect.drawFragment": (frag)=>{
                    ctx.beginPath();
                    ctx.arc(frag.x, frag.y, frag.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255,165,0,${frag.life / 30})`;
                    ctx.fill();
                    ctx.closePath();
                }
            }["SpaceDodgerGame.useEffect.drawFragment"];
            const drawEnemy = {
                "SpaceDodgerGame.useEffect.drawEnemy": (enemy)=>{
                    ctx.save();
                    ctx.translate(enemy.x, enemy.y);
                    ctx.beginPath();
                    ctx.moveTo(0, -enemy.height / 2);
                    ctx.lineTo(-enemy.width / 2, enemy.height / 4);
                    ctx.lineTo(-enemy.width / 4, enemy.height / 2);
                    ctx.lineTo(enemy.width / 4, enemy.height / 2);
                    ctx.lineTo(enemy.width / 2, enemy.height / 4);
                    ctx.closePath();
                    let enemyGrad = ctx.createLinearGradient(0, -enemy.height / 2, 0, enemy.height / 2);
                    enemyGrad.addColorStop(0, "#ffcc00");
                    enemyGrad.addColorStop(1, "#cc9900");
                    ctx.fillStyle = enemyGrad;
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(0, 0, enemy.width / 6, 0, Math.PI * 2);
                    ctx.fillStyle = "#ffffff";
                    ctx.fill();
                    ctx.restore();
                }
            }["SpaceDodgerGame.useEffect.drawEnemy"];
            const createFragments = {
                "SpaceDodgerGame.useEffect.createFragments": (obs)=>{
                    const numFragments = 5;
                    for(let i = 0; i < numFragments; i++){
                        fragments.push({
                            x: obs.x,
                            y: obs.y,
                            radius: obs.radius / 4,
                            angle: Math.random() * Math.PI * 2,
                            speed: 1 + Math.random() * 2,
                            life: 30
                        });
                    }
                }
            }["SpaceDodgerGame.useEffect.createFragments"];
            const updateFragments = {
                "SpaceDodgerGame.useEffect.updateFragments": ()=>{
                    for(let i = fragments.length - 1; i >= 0; i--){
                        const frag = fragments[i];
                        frag.x += frag.speed * Math.cos(frag.angle);
                        frag.y += frag.speed * Math.sin(frag.angle);
                        frag.life -= 1;
                        if (frag.life <= 0) {
                            fragments.splice(i, 1);
                        }
                    }
                }
            }["SpaceDodgerGame.useEffect.updateFragments"];
            const circleCollision = {
                "SpaceDodgerGame.useEffect.circleCollision": (x1, y1, r1, x2, y2, r2)=>{
                    const dx = x1 - x2;
                    const dy = y1 - y2;
                    return Math.sqrt(dx * dx + dy * dy) < r1 + r2;
                }
            }["SpaceDodgerGame.useEffect.circleCollision"];
            const gameLoop = {
                "SpaceDodgerGame.useEffect.gameLoop": ()=>{
                    if (paused) {
                        ctx.fillStyle = "rgba(0,0,0,0.5)";
                        ctx.fillRect(0, 0, baseWidth, baseHeight);
                        ctx.fillStyle = "yellow";
                        ctx.font = "40px Arial";
                        ctx.textAlign = "center";
                        ctx.fillText("PAUSADO", baseWidth / 2, baseHeight / 2);
                        animationFrameRef.current = requestAnimationFrame(gameLoop);
                        return;
                    }
                    drawBackground();
                    if (!gameStarted) {
                        animationFrameRef.current = requestAnimationFrame(gameLoop);
                        return;
                    }
                    let dificultad = "facil";
                    if (scoreRef.current >= 6000) {
                        dificultad = "avanzado";
                    } else if (scoreRef.current >= 3000) {
                        dificultad = "medio";
                    }
                    // Condición de victoria a 13,000 puntos
                    if (scoreRef.current >= 13000) {
                        setGameOver(true);
                        ctx.fillStyle = "rgba(0,0,0,0.85)";
                        ctx.fillRect(0, baseHeight / 2 - 50, baseWidth, 100);
                        ctx.fillStyle = "green";
                        ctx.font = "32px Arial";
                        ctx.textAlign = "center";
                        ctx.fillText("¡HAS GANADO!", baseWidth / 2, baseHeight / 2 + 15);
                        return;
                    }
                    if (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) {
                        spaceship.x += (targetPosition.x - spaceship.x) * smoothingFactor;
                        spaceship.y += (targetPosition.y - spaceship.y) * smoothingFactor;
                    }
                    if (keys["ArrowLeft"]) {
                        spaceship.x -= spaceship.speed;
                    }
                    if (keys["ArrowRight"]) {
                        spaceship.x += spaceship.speed;
                    }
                    if (keys["ArrowUp"]) {
                        spaceship.y -= spaceship.speed;
                    }
                    if (keys["ArrowDown"]) {
                        spaceship.y += spaceship.speed;
                    }
                    if (keys["z"]) {
                        spaceship.x += keys["ArrowRight"] ? spaceship.speed * 0.8 : 0;
                        spaceship.x -= keys["ArrowLeft"] ? spaceship.speed * 0.8 : 0;
                        spaceship.y -= keys["ArrowUp"] ? spaceship.speed * 0.8 : 0;
                        spaceship.y += keys["ArrowDown"] ? spaceship.speed * 0.8 : 0;
                    }
                    spaceship.x = Math.max(spaceship.width / 2, Math.min(spaceship.x, baseWidth - spaceship.width / 2));
                    spaceship.y = Math.max(spaceship.height / 2, Math.min(spaceship.y, baseHeight - spaceship.height / 2));
                    if (keys["x"] && canShoot) {
                        shootShot(selectedWeapon);
                    }
                    drawSpaceship();
                    bullets = bullets.filter({
                        "SpaceDodgerGame.useEffect.gameLoop": (b)=>b.y + (b.radius || 0) > 0
                    }["SpaceDodgerGame.useEffect.gameLoop"]);
                    bullets.forEach({
                        "SpaceDodgerGame.useEffect.gameLoop": (b)=>{
                            if (b.angle !== undefined) {
                                b.x += b.speed * Math.sin(b.angle);
                                b.y -= b.speed * Math.cos(b.angle);
                            } else {
                                b.y -= b.speed;
                            }
                            drawBullet(b);
                        }
                    }["SpaceDodgerGame.useEffect.gameLoop"]);
                    obstacleTimer++;
                    if (obstacleTimer > obstacleInterval) {
                        createObstacle();
                        obstacleTimer = 0;
                    }
                    obstacles = obstacles.filter({
                        "SpaceDodgerGame.useEffect.gameLoop": (obs)=>obs.y - obs.radius < baseHeight
                    }["SpaceDodgerGame.useEffect.gameLoop"]);
                    obstacles.forEach({
                        "SpaceDodgerGame.useEffect.gameLoop": (obs, index)=>{
                            obs.y += obs.speed;
                            drawObstacle(obs);
                            if (circleCollision(spaceship.x, spaceship.y, spaceship.width * 0.3, obs.x, obs.y, obs.radius)) {
                                setGameOver(true);
                                if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
                                return;
                            }
                            bullets.forEach({
                                "SpaceDodgerGame.useEffect.gameLoop": (bullet, bIndex)=>{
                                    if (circleCollision(bullet.x, bullet.y, bullet.radius, obs.x, obs.y, obs.radius)) {
                                        createFragments(obs);
                                        obstacles.splice(index, 1);
                                        bullets.splice(bIndex, 1);
                                        const points = Math.floor(obs.radius * 10);
                                        scoreRef.current += points;
                                        setDestroyedPlanets({
                                            "SpaceDodgerGame.useEffect.gameLoop": (prev)=>({
                                                    ...prev,
                                                    [obs.design]: prev[obs.design] + 1
                                                })
                                        }["SpaceDodgerGame.useEffect.gameLoop"]);
                                    }
                                }
                            }["SpaceDodgerGame.useEffect.gameLoop"]);
                        }
                    }["SpaceDodgerGame.useEffect.gameLoop"]);
                    enemyTimer++;
                    let enemySpawnInterval = dificultad === "facil" ? 800 : dificultad === "medio" ? 600 : 400;
                    if (enemyTimer > enemySpawnInterval) {
                        createEnemy();
                        enemyTimer = 0;
                    }
                    enemies = enemies.filter({
                        "SpaceDodgerGame.useEffect.gameLoop": (enemy)=>enemy.y - enemy.height < baseHeight
                    }["SpaceDodgerGame.useEffect.gameLoop"]);
                    enemies.forEach({
                        "SpaceDodgerGame.useEffect.gameLoop": (enemy, eIndex)=>{
                            enemy.y += enemy.speed;
                            enemy.shootTimer++;
                            let enemyShootInterval = dificultad === "facil" ? 120 : dificultad === "medio" ? 90 : 60;
                            if (enemy.shootTimer > enemyShootInterval) {
                                const angle = Math.atan2(spaceship.y - enemy.y, spaceship.x - enemy.x);
                                enemyBullets.push({
                                    x: enemy.x,
                                    y: enemy.y + enemy.height / 2,
                                    radius: 4,
                                    speed: dificultad === "avanzado" ? 5 : 4,
                                    angle
                                });
                                enemy.shootTimer = 0;
                            }
                            drawEnemy(enemy);
                            if (spaceship.x > enemy.x - enemy.width / 2 && spaceship.x < enemy.x + enemy.width / 2 && spaceship.y > enemy.y - enemy.height / 2 && spaceship.y < enemy.y + enemy.height / 2) {
                                setGameOver(true);
                                if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
                                return;
                            }
                            bullets.forEach({
                                "SpaceDodgerGame.useEffect.gameLoop": (bullet, bIndex)=>{
                                    if (circleCollision(bullet.x, bullet.y, bullet.radius, enemy.x, enemy.y, enemy.width / 2)) {
                                        enemies.splice(eIndex, 1);
                                        bullets.splice(bIndex, 1);
                                        scoreRef.current += 200;
                                        setDestroyedEnemies({
                                            "SpaceDodgerGame.useEffect.gameLoop": (prev)=>prev + 1
                                        }["SpaceDodgerGame.useEffect.gameLoop"]);
                                    }
                                }
                            }["SpaceDodgerGame.useEffect.gameLoop"]);
                        }
                    }["SpaceDodgerGame.useEffect.gameLoop"]);
                    enemyBullets = enemyBullets.filter({
                        "SpaceDodgerGame.useEffect.gameLoop": (b)=>b.y - (b.radius || 0) < baseHeight
                    }["SpaceDodgerGame.useEffect.gameLoop"]);
                    enemyBullets.forEach({
                        "SpaceDodgerGame.useEffect.gameLoop": (b, index)=>{
                            if (b.angle !== undefined) {
                                b.x += b.speed * Math.cos(b.angle);
                                b.y += b.speed * Math.sin(b.angle);
                            } else {
                                b.y += b.speed;
                            }
                            drawBullet(b);
                            if (circleCollision(b.x, b.y, b.radius, spaceship.x, spaceship.y, spaceship.width * 0.3)) {
                                setGameOver(true);
                                if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
                                return;
                            }
                        }
                    }["SpaceDodgerGame.useEffect.gameLoop"]);
                    updateFragments();
                    fragments.forEach({
                        "SpaceDodgerGame.useEffect.gameLoop": (frag)=>{
                            drawFragment(frag);
                        }
                    }["SpaceDodgerGame.useEffect.gameLoop"]);
                    setScore(scoreRef.current);
                    ctx.fillStyle = "white";
                    ctx.font = "20px Arial";
                    ctx.textAlign = "left";
                    ctx.fillText("Score: " + scoreRef.current, 20, 30);
                    ctx.fillStyle = "white";
                    ctx.font = "16px Arial";
                    ctx.textAlign = "right";
                    ctx.fillText("Dificultad: " + dificultad.toUpperCase(), baseWidth - 20, 30);
                    if (!gameOver) {
                        animationFrameRef.current = requestAnimationFrame(gameLoop);
                    } else {
                        ctx.fillStyle = "rgba(0,0,0,0.85)";
                        ctx.fillRect(0, baseHeight / 2 - 50, baseWidth, 100);
                        ctx.fillStyle = "red";
                        ctx.font = "32px Arial";
                        ctx.textAlign = "center";
                        ctx.fillText("GAME OVER", baseWidth / 2, baseHeight / 2 + 15);
                    }
                }
            }["SpaceDodgerGame.useEffect.gameLoop"];
            gameLoop();
            return ({
                "SpaceDodgerGame.useEffect": ()=>{
                    document.removeEventListener("keydown", keyDownHandler, false);
                    document.removeEventListener("keyup", keyUpHandler, false);
                    canvas.removeEventListener("touchstart", updateSpaceshipPosition);
                    canvas.removeEventListener("touchmove", updateSpaceshipPosition);
                    canvas.removeEventListener("touchend", handleTouchEnd);
                    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
                }
            })["SpaceDodgerGame.useEffect"];
        }
    }["SpaceDodgerGame.useEffect"], [
        gameStarted,
        selectedWeapon,
        paused,
        resetGame,
        shipDesign
    ]);
    const designNames = {
        0: {
            name: "Neptuno",
            color: "#a0c8ff"
        },
        1: {
            name: "Jupiter",
            color: "#ffddaa"
        },
        2: {
            name: "Tierra",
            color: "#ccffcc"
        },
        3: {
            name: "Saturno",
            color: "#ffd1dc"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: "center",
            maxWidth: "900px",
            margin: "20px auto",
            padding: "20px",
            border: "2px solid #333",
            background: "#000",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    width: "100%",
                    height: "auto",
                    background: "#000",
                    touchAction: "none"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/SpaceShooterGame.tsx",
                lineNumber: 831,
                columnNumber: 7
            }, this),
            gameStarted && !gameOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 20,
                    right: 20,
                    zIndex: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setPaused((p)=>!p),
                        style: {
                            padding: "6px 10px",
                            marginRight: "10px",
                            background: "rgba(0, 119, 204, 0.6)",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "14px"
                        },
                        children: paused ? "Reanudar" : "Pausar"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SpaceShooterGame.tsx",
                        lineNumber: 842,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: restartGame,
                        style: {
                            padding: "6px 10px",
                            marginRight: "10px",
                            background: "rgba(204, 0, 0, 0.6)",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "14px"
                        },
                        children: "Reiniciar"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SpaceShooterGame.tsx",
                        lineNumber: 856,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: terminateGame,
                        style: {
                            padding: "6px 10px",
                            background: "rgba(100, 100, 100, 0.6)",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "14px"
                        },
                        children: "Terminar partida"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SpaceShooterGame.tsx",
                        lineNumber: 870,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SpaceShooterGame.tsx",
                lineNumber: 841,
                columnNumber: 9
            }, this),
            !gameStarted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.8)",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 10,
                    fontSize: "18px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: "28px",
                            marginBottom: "20px"
                        },
                        children: "SPACE DODGER"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SpaceShooterGame.tsx",
                        lineNumber: 903,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginBottom: "10px"
                        },
                        children: 'Para PC: Usa las flechas para mover la nave, "z" para impulso extra y "x" para disparar.'
                    }, void 0, false, {
                        fileName: "[project]/app/components/SpaceShooterGame.tsx",
                        lineNumber: 904,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginBottom: "10px"
                        },
                        children: "Para móvil: Arrastra para mover la nave y toca 1, 2 o 3 veces para disparar."
                    }, void 0, false, {
                        fileName: "[project]/app/components/SpaceShooterGame.tsx",
                        lineNumber: 907,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            margin: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    marginRight: "10px"
                                },
                                children: "Elige tu armamento (para teclado):"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SpaceShooterGame.tsx",
                                lineNumber: 911,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedWeapon("normal"),
                                style: {
                                    padding: "8px 16px",
                                    marginRight: "10px",
                                    background: selectedWeapon === "normal" ? "#0077cc" : "#555",
                                    color: "white",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "14px"
                                },
                                children: "Normal"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SpaceShooterGame.tsx",
                                lineNumber: 912,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedWeapon("spread"),
                                style: {
                                    padding: "8px 16px",
                                    marginRight: "10px",
                                    background: selectedWeapon === "spread" ? "#0077cc" : "#555",
                                    color: "white",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "14px"
                                },
                                children: "Spread"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SpaceShooterGame.tsx",
                                lineNumber: 926,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedWeapon("laser"),
                                style: {
                                    padding: "8px 16px",
                                    background: selectedWeapon === "laser" ? "#0077cc" : "#555",
                                    color: "white",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "14px"
                                },
                                children: "Laser"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SpaceShooterGame.tsx",
                                lineNumber: 940,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SpaceShooterGame.tsx",
                        lineNumber: 910,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            margin: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    marginRight: "10px"
                                },
                                children: "Elige el diseño de tu nave:"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SpaceShooterGame.tsx",
                                lineNumber: 956,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: "10px"
                                },
                                children: Array.from({
                                    length: 6
                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                        width: 60,
                                        height: 60,
                                        style: {
                                            border: shipDesign === i ? "2px solid yellow" : "1px solid gray",
                                            margin: "0 5px",
                                            cursor: "pointer"
                                        },
                                        ref: (el)=>{
                                            if (el) {
                                                const ctx = el.getContext("2d");
                                                if (ctx) {
                                                    // Dibuja la vista previa con el arma seleccionada
                                                    drawSpaceshipPreview(ctx, i, selectedWeapon);
                                                }
                                            }
                                        },
                                        onClick: ()=>setShipDesign(i)
                                    }, i, false, {
                                        fileName: "[project]/app/components/SpaceShooterGame.tsx",
                                        lineNumber: 959,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/SpaceShooterGame.tsx",
                                lineNumber: 957,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SpaceShooterGame.tsx",
                        lineNumber: 955,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setGameStarted(true),
                        style: {
                            padding: "10px 20px",
                            fontSize: "16px",
                            background: "#00cc66",
                            color: "white",
                            border: "none",
                            cursor: "pointer"
                        },
                        children: "Iniciar Juego"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SpaceShooterGame.tsx",
                        lineNumber: 982,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SpaceShooterGame.tsx",
                lineNumber: 886,
                columnNumber: 9
            }, this),
            gameOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.8)",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 20,
                    fontSize: "18px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: "28px",
                            marginBottom: "20px"
                        },
                        children: scoreRef.current >= 13000 ? "¡HAS GANADO!" : "GAME OVER"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SpaceShooterGame.tsx",
                        lineNumber: 1015,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginBottom: "10px"
                        },
                        children: [
                            "Score: ",
                            score
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SpaceShooterGame.tsx",
                        lineNumber: 1018,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            margin: "10px 0",
                            textAlign: "left"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    marginBottom: "5px"
                                },
                                children: "Planetas Destruidos:"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SpaceShooterGame.tsx",
                                lineNumber: 1020,
                                columnNumber: 13
                            }, this),
                            Object.keys(destroyedPlanets).map((key)=>{
                                const design = Number(key);
                                const info = designNames[design];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: info.color,
                                        margin: "2px 0"
                                    },
                                    children: [
                                        info.name,
                                        ": ",
                                        destroyedPlanets[design]
                                    ]
                                }, design, true, {
                                    fileName: "[project]/app/components/SpaceShooterGame.tsx",
                                    lineNumber: 1025,
                                    columnNumber: 17
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    marginTop: "10px"
                                },
                                children: [
                                    "Enemigos Destruidos: ",
                                    destroyedEnemies
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SpaceShooterGame.tsx",
                                lineNumber: 1030,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SpaceShooterGame.tsx",
                        lineNumber: 1019,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: restartGame,
                        style: {
                            padding: "10px 20px",
                            fontSize: "16px",
                            background: "rgba(204, 0, 0, 0.6)",
                            color: "white",
                            border: "none",
                            cursor: "pointer"
                        },
                        children: "Reiniciar Juego"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SpaceShooterGame.tsx",
                        lineNumber: 1032,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SpaceShooterGame.tsx",
                lineNumber: 998,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SpaceShooterGame.tsx",
        lineNumber: 820,
        columnNumber: 5
    }, this);
}
_s(SpaceDodgerGame, "r3qi45P0lRNhBz1Oc0HjTPvGEzo=");
_c = SpaceDodgerGame;
var _c;
__turbopack_context__.k.register(_c, "SpaceDodgerGame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/images.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ImageSlider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ImageSlider() {
    _s();
    const images = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ImageSlider.useMemo[images]": ()=>[
                "/muha.png",
                "/mente.png",
                "/moon.png",
                "/proverbios.png"
            ]
    }["ImageSlider.useMemo[images]"], []);
    const [i, setI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageSlider.useEffect": ()=>{
            const t = setInterval({
                "ImageSlider.useEffect.t": ()=>{
                    setI({
                        "ImageSlider.useEffect.t": (x)=>(x + 1) % images.length
                    }["ImageSlider.useEffect.t"]);
                }
            }["ImageSlider.useEffect.t"], 3000);
            return ({
                "ImageSlider.useEffect": ()=>clearInterval(t)
            })["ImageSlider.useEffect"];
        }
    }["ImageSlider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "images-section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "images-container",
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                gap: "15px",
                margin: "20px auto",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                padding: 20,
                borderRadius: 8,
                flexWrap: "wrap"
            },
            children: images.map((src, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: src,
                    alt: `Imagen ${idx + 1}`,
                    style: {
                        width: "23%",
                        height: "auto",
                        objectFit: "cover",
                        opacity: idx === i ? 1 : 0.5,
                        transition: "opacity 1s ease-in-out",
                        borderRadius: "8px",
                        filter: idx === i ? "none" : "grayscale(50%)"
                    }
                }, idx, false, {
                    fileName: "[project]/app/components/images.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/app/components/images.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/images.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(ImageSlider, "bxKw1nTPIK7zm7nziEKQrAfc23c=");
_c = ImageSlider;
var _c;
__turbopack_context__.k.register(_c, "ImageSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MatrixCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MatrixCanvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProjectsSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ProjectsSlider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ChatBot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ChatBot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$curriculum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/curriculum.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/LanguageSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Music$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Music.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SpaceShooterGame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/SpaceShooterGame.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$images$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/images.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function Page() {
    _s();
    const [visibleSection, setVisibleSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en");
    const [showFullScreenGame, setShowFullScreenGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMusic, setShowMusic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            document.body.style.overflow = showFullScreenGame ? "hidden" : "auto";
            return ({
                "Page.useEffect": ()=>{
                    document.body.style.overflow = "auto";
                }
            })["Page.useEffect"];
        }
    }["Page.useEffect"], [
        showFullScreenGame
    ]);
    const toggleSection = (section)=>{
        if (section === "game") {
            setShowFullScreenGame((prev)=>!prev);
            setVisibleSection(null);
        } else {
            setVisibleSection((prevSection)=>prevSection === section ? null : section);
            setShowFullScreenGame(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "10px",
            maxWidth: "90%",
            margin: "0 auto",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MatrixCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                    position: "relative",
                    zIndex: 10
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    currentLanguage: language,
                    onSwitch: setLanguage
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero",
                style: {
                    display: showFullScreenGame || visibleSection ? "none" : "block"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "hero-title",
                        children: language === "es" ? "Bienvenido a mi sitio web" : "Welcome to my website"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "10px",
                            justifyContent: "center",
                            flexWrap: "wrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleSection("curriculum"),
                                className: "hero-btn",
                                children: language === "es" ? "Ver Currículum" : "View Curriculum Vitae"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleSection("projects"),
                                className: "hero-btn secondary",
                                children: language === "es" ? "Ver Mockups" : "See Mockups"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleSection("chatbot"),
                                className: "hero-btn ai-btn",
                                children: language === "es" ? "Preguntar a ChatBot" : "Ask ChatBot"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowMusic(!showMusic),
                                className: "hero-btn music-btn",
                                children: showMusic ? language === "es" ? "Ocultar Música" : "Hide Music" : language === "es" ? "Escuchar Música" : "Listen to Music"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>window.location.href = "https://sesion-three.vercel.app/",
                                className: "hero-btn redirect-btn",
                                children: language === "es" ? "Nueva plataforma" : "New platform"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleSection("game"),
                                className: "hero-btn game-btn",
                                children: language === "es" ? "Jugar en 2D" : "Play 2D Game"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            visibleSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    padding: "40px 20px 20px",
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setVisibleSection(null),
                        className: "hero-btn close-btn",
                        style: {
                            position: "absolute",
                            top: "-20px",
                            right: "10px",
                            zIndex: 10
                        },
                        children: language === "es" ? "Ocultar Sección" : "Hide Section"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    visibleSection === "projects" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProjectsSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 94,
                        columnNumber: 45
                    }, this),
                    visibleSection === "curriculum" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$curriculum$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        language: language
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 95,
                        columnNumber: 47
                    }, this),
                    visibleSection === "chatbot" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ChatBot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 96,
                        columnNumber: 44
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this),
            !visibleSection && !showFullScreenGame && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$images$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 100,
                columnNumber: 50
            }, this),
            showMusic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Music$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 101,
                columnNumber: 21
            }, this),
            showFullScreenGame && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "black",
                    zIndex: 1000,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowFullScreenGame(false),
                        className: "hero-btn game-btn",
                        style: {
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            zIndex: 1100
                        },
                        children: language === "es" ? "Ocultar Juego" : "Hide Game"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SpaceShooterGame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(Page, "z1zGe/NkOHRTIKI3ca/t+LHGxfg=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_777651f1._.js.map