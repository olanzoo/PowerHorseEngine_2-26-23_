"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[556],{77969:r=>{r.exports=JSON.parse('{"functions":[{"name":"LoadLibrary","desc":"You can Load Multiple Libraries at once\\n\\n```lua\\nlocal Library1,Library2 = LibraryProvider.LoadLibrary(\\"Library1\\",\\"Library2\\");\\n```\\n\\nYou can also Load `Cloud` Libraries from here. `Cloud` Libraries are just modules in your .content > libs folder. To load a\\ncloud library place `@` at the start of the library name\\n\\n```lua\\nlocal Library1,Library2 = LibraryProvider.LoadLibrary(\\"@Library1\\",\\"@Library2\\");\\n```\\n\\nYou can also load specific modules within a library\\n\\n```lua\\nlocal FastSpawningModule,SlowSpawningModule = LibraryProvider.LoadLibrary(\\"@Library1/FastSpawningModule\\",\\"Library2/SlowSpawningModule\\");\\n```","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"static","source":{"line":82,"path":"src/Core/Providers/LibraryProvider/init.lua"}}],"properties":[],"types":[],"name":"LibraryProvider","desc":"","tags":["Provider"],"source":{"line":5,"path":"src/Core/Providers/LibraryProvider/init.lua"}}')}}]);