"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1520],{4835:e=>{e.exports=JSON.parse('{"functions":[{"name":"GetTradeActive","desc":"","params":[{"name":"Player1","desc":"","lua_type":"Player"},{"name":"Player2","desc":"","lua_type":"Player?"}],"returns":[{"desc":"","lua_type":"Player|boolean\\r\\n"}],"function_type":"method","realm":["Server"],"source":{"line":145,"path":"src/Core/Services/TradeService.lua"}},{"name":"TradeRequestOutBound","desc":"A handler for sending out trade requests, by default it will use prompt service and prompt the reciever, it will then\\nuse the reponse from the reciever to either send back \\"accept\\" or \\"decline\\".\\n\\nTo add your own TradeRequestOutBound, overwrite the function at the top of your source. You will need to also handle how the client\\nprecieves this request, by either using remote events or PromptService:PromptUserAsync\\n\\n:::warning\\nYou must return a [PHeSignal]/[BindableEvent] within your function\\n:::\\nYou don\'t have to worry about if either players are in an active trade because the constructor handles that for you.","params":[{"name":"Sender","desc":"","lua_type":"Player"},{"name":"Reciever","desc":"","lua_type":"Player"},{"name":"Header","desc":"","lua_type":"string?"},{"name":"Body","desc":"","lua_type":"string?"},{"name":"Blurred","desc":"","lua_type":"boolean?"},{"name":"Button1","desc":"","lua_type":"string?"},{"name":"Button2","desc":"","lua_type":"string?"}],"returns":[{"desc":"","lua_type":"PHeSignal"}],"function_type":"static","realm":["Server"],"source":{"line":168,"path":"src/Core/Services/TradeService.lua"}},{"name":"new","desc":"","params":[{"name":"Sender","desc":"","lua_type":"Player"},{"name":"Reciever","desc":"","lua_type":"Player"},{"name":"Header","desc":"","lua_type":"string?"},{"name":"Body","desc":"","lua_type":"string?"},{"name":"Blurred","desc":"","lua_type":"boolean?"},{"name":"Button1","desc":"","lua_type":"string?"},{"name":"Button2","desc":"","lua_type":"string?"}],"returns":[{"desc":"","lua_type":"TradeConstructorResults"}],"function_type":"static","realm":["Server"],"source":{"line":181,"path":"src/Core/Services/TradeService.lua"}}],"properties":[{"name":"TradeStarted","desc":"Only trades pertaining the client will be caught.","lua_type":"PHeSignal","realm":["Client"],"source":{"line":15,"path":"src/Core/Services/ClientTradeService.lua"}},{"name":"TradeEnded","desc":"Only trades pertaining the client will be caught.","lua_type":"PHeSignal","realm":["Client"],"source":{"line":22,"path":"src/Core/Services/ClientTradeService.lua"}},{"name":"TradeRequest","desc":"","lua_type":"PHeSignal","realm":["Server"],"source":{"line":26,"path":"src/Core/Services/TradeService.lua"}},{"name":"TradeStarted","desc":"On the server, every trade started will be caught but on the client, only trades pertaining that client will be caught.","lua_type":"PHeSignal<ActiveTrade>","realm":["Server"],"source":{"line":33,"path":"src/Core/Services/TradeService.lua"}},{"name":"TradeEnded","desc":"On the server, every trade ended will be caught but on the client, only trades pertaining that client will be caught.","lua_type":"PHeSignal<ActiveTrade>","realm":["Server"],"source":{"line":40,"path":"src/Core/Services/TradeService.lua"}}],"types":[{"name":"TradeConstructorResults","desc":"","fields":[{"name":"success","lua_type":"boolean","desc":"whether the trade was accepted or declined/failed"},{"name":"response","lua_type":"string?","desc":"response from the trade. accepted,declined,failed"},{"name":"error","lua_type":"string?","desc":"if declined or failed, reason will be shown here"}],"source":{"line":10,"path":"src/Core/Services/TradeService.lua"}}],"name":"TradeService","desc":"","tags":["Service"],"source":{"line":20,"path":"src/Core/Services/TradeService.lua"}}')}}]);