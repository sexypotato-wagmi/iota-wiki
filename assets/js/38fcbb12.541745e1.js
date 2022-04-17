"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[74119],{87074:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),l=["components"],o={title:"Rust Cheat Sheet",sidebar_label:"Cheat Sheet",description:"IOTA Identity Rust Library Cheat Sheet",image:"/img/Identity_icon.png",keywords:["rust","identity","decentralized identifiers","did","verifiable credentials","verifiable presentations","create","update","resolve","remove"]},s=void 0,d={unversionedId:"libraries/rust/cheat_sheet",id:"libraries/rust/cheat_sheet",title:"Rust Cheat Sheet",description:"IOTA Identity Rust Library Cheat Sheet",source:"@site/external/identity.rs/documentation/docs/libraries/rust/cheat_sheet.md",sourceDirName:"libraries/rust",slug:"/libraries/rust/cheat_sheet",permalink:"/identity.rs/libraries/rust/cheat_sheet",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/libraries/rust/cheat_sheet.md",tags:[],version:"current",frontMatter:{title:"Rust Cheat Sheet",sidebar_label:"Cheat Sheet",description:"IOTA Identity Rust Library Cheat Sheet",image:"/img/Identity_icon.png",keywords:["rust","identity","decentralized identifiers","did","verifiable credentials","verifiable presentations","create","update","resolve","remove"]},sidebar:"docs",previous:{title:"Getting Started",permalink:"/identity.rs/libraries/rust/getting_started"},next:{title:"API Reference",permalink:"/identity.rs/libraries/rust/api_reference"}},u={},c=[{value:"Import the Library",id:"import-the-library",level:2},{value:"Latest Stable Release",id:"latest-stable-release",level:3},{value:"Development Release",id:"development-release",level:3},{value:"Decentralized Identifiers (DID)",id:"decentralized-identifiers-did",level:2},{value:"Create",id:"create",level:3},{value:"Account::builder().build()",id:"accountbuilderbuild",level:4},{value:"Returns",id:"returns",level:5},{value:"Account.create_identity(IdentityCreate::default())",id:"accountcreate_identityidentitycreatedefault",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Publish",id:"publish",level:3},{value:"Account.publish_updates(did)",id:"accountpublish_updatesdid",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Update",id:"update",level:3},{value:"Account.update_identity(did).create_method()",id:"accountupdate_identitydidcreate_method",level:4},{value:"Returns",id:"returns-3",level:5},{value:"Account.update_identity(did).create_service()",id:"accountupdate_identitydidcreate_service",level:4},{value:"Returns",id:"returns-4",level:5},{value:"Resolve",id:"resolve",level:3},{value:"Account.resolve_identity(did)",id:"accountresolve_identitydid",level:4},{value:"Returns",id:"returns-5",level:5},{value:"Verifiable Credentials (VC)",id:"verifiable-credentials-vc",level:2},{value:"Sign",id:"sign",level:3},{value:"Account.sign(did, key, fragment)",id:"accountsigndid-key-fragment",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Verifiable Presentations (VP)",id:"verifiable-presentations-vp",level:2},{value:"Create",id:"create-1",level:3}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"import-the-library"},"Import the Library"),(0,r.kt)("p",null,"To include IOTA Identity in your project add it as a dependency in your Cargo.toml."),(0,r.kt)("h3",{id:"latest-stable-release"},"Latest Stable Release"),(0,r.kt)("p",null,"This version matches the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch of this repository. It is ",(0,r.kt)("strong",{parentName:"p"},"stable")," and will have ",(0,r.kt)("strong",{parentName:"p"},"changelogs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'[dependencies]\nidentity = { git = "https://github.com/iotaledger/identity.rs", branch = "main"}\n')),(0,r.kt)("h3",{id:"development-release"},"Development Release"),(0,r.kt)("p",null,"This version matches the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," branch of this repository. It has all the ",(0,r.kt)("strong",{parentName:"p"},"latest features"),", but as such it ",(0,r.kt)("strong",{parentName:"p"},"may also have undocumented breaking changes"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'[dependencies]\nidentity = { git = "https://github.com/iotaledger/identity.rs", branch = "dev"}\n')),(0,r.kt)("h2",{id:"decentralized-identifiers-did"},"Decentralized Identifiers (DID)"),(0,r.kt)("p",null,"A DID is a unique identifier that contains information that can be resolved to a DID Document. This document contains data such as public keys, enabling the holder to prove ownership over their personal data, but also URIs that link to public information about the identity. This implementation complies to the DID specifications v1.0 Working."),(0,r.kt)("h3",{id:"create"},(0,r.kt)("a",{parentName:"h3",href:"/identity.rs/decentralized_identifiers/create"},"Create")),(0,r.kt)("h4",{id:"accountbuilderbuild"},"Account::builder().build()"),(0,r.kt)("p",null,"Creates a new Account with the default configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rs"},"let account: Account = Account::builder().build().await?;\n")),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"IdentitySnapshot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},'Account {\n    config: Config {\n        autosave: Every,\n        autopublish: true,\n        dropsave: true,\n        testmode: false,\n        milestone: 1,\n    },\n    state: State {\n        actions: 1,\n        clients: ClientMap {\n            data: {\n                NetworkName(\n                    "main",\n                ): Client {\n                    client: Client {\n                        node_manager: NodeManager {\n                            primary_node: None,\n                            primary_pow_node: None,\n                            nodes: {\n                                Node {\n                                    url: Url {\n                                        scheme: "https",\n                                        cannot_be_a_base: false,\n                                        username: "",\n                                        password: None,\n                                        host: Some(\n                                            Domain(\n                                                "chrysalis-nodes.iota.org",\n                                            ),\n                                        ),\n                                        port: None,\n                                        path: "/",\n                                        query: None,\n                                        fragment: None,\n                                    },\n                                    jwt: None,\n                                },\n                            },\n                            permanodes: None,\n                            sync: true,\n                            sync_interval: 60s,\n                            synced_nodes: RwLock {\n                                data: {\n                                    Node {\n                                        url: Url {\n                                            scheme: "https",\n                                            cannot_be_a_base: false,\n                                            username: "",\n                                            password: None,\n                                            host: Some(\n                                                Domain(\n                                                    "chrysalis-nodes.iota.org",\n                                                ),\n                                            ),\n                                            port: None,\n                                            path: "/",\n                                            query: None,\n                                            fragment: None,\n                                        },\n                                        jwt: None,\n                                    },\n                                },\n                                poisoned: false,\n                                ..\n                            },\n                            quorum: false,\n                            quorum_size: 3,\n                            quorum_threshold: 66,\n                        },\n                        network_info: RwLock {\n                            data: NetworkInfo {\n                                network: Some(\n                                    "main",\n                                ),\n                                network_id: Some(\n                                    1454675179895816119,\n                                ),\n                                bech32_hrp: "iota",\n                                min_pow_score: 4000.0,\n                                local_pow: false,\n                                tips_interval: 15,\n                            },\n                            poisoned: false,\n                            ..\n                        },\n                    },\n                    network: Mainnet,\n                },\n            },\n        },\n    },\n    store: MemStore,\n    index: RwLock {\n        mr: 536870911,\n        s: Semaphore {\n            permits: 536870911,\n        },\n        c: UnsafeCell { .. },\n    },\n}\n'))),(0,r.kt)("h4",{id:"accountcreate_identityidentitycreatedefault"},"Account.create_identity(IdentityCreate::default())"),(0,r.kt)("p",null,"Create a new Identity with default settings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rs"},"let snapshot: IdentitySnapshot = account.create_identity(IdentityCreate::default()).await?;\n")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"IdentitySnapshot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"}," IdentitySnapshot {\n    sequence: Generation(4),\n    identity: IdentityState {\n        id: IdentityId(0x00000001),\n        integration_generation: Generation(1),\n        diff_generation: Generation(0),\n        this_message_id: MessageId(1b802018b0fcf2acbf292fd231e1407cd1db21509ee17aa71e7ef5bf564c6c51),\n        last_integration_message_id: MessageId(0000000000000000000000000000000000000000000000000000000000000000),\n        last_diff_message_id: MessageId(0000000000000000000000000000000000000000000000000000000000000000),\n        did: Some(\n            did:iota:2Gihsa2TXGCAhfHLfS4qtUtW13h4ayKeT5C58KtUcj9s,\n        ),\n        controller: None,\n        also_known_as: None,\n        methods: Methods {\n            data: {\n                Authentication: [\n                    Refer(\n                        Fragment(_sign-0),\n                    ),\n                ],\n                VerificationMethod: [\n                    Embed(\n                        TinyMethod {\n                            location: KeyLocation(0:0:_sign-0:0),\n                            key_data: PublicKeyBase58(FVTfZXkbTtRcnBUGaTvYDbJSJZ9QFQp9CBRM9fvJQhX5),\n                            properties: None,\n                        },\n                    ),\n                ],\n            },\n        },\n        services: Services {\n            data: [],\n        },\n        created: UnixTimestamp(1634124718),\n        updated: UnixTimestamp(1634124718),\n    },\n}\n"))),(0,r.kt)("h3",{id:"publish"},(0,r.kt)("a",{parentName:"h3",href:"/identity.rs/decentralized_identifiers/create"},"Publish")),(0,r.kt)("h4",{id:"accountpublish_updatesdid"},"Account.publish_updates(did)"),(0,r.kt)("p",null,"Publish a DID document."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rs"},"Account.publish_updates(did).await?;\n")),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"}," {\n    Ok(T),\n    Err(E),\n}\n"))),(0,r.kt)("h3",{id:"update"},(0,r.kt)("a",{parentName:"h3",href:"/identity.rs/decentralized_identifiers/update"},"Update")),(0,r.kt)("h4",{id:"accountupdate_identitydidcreate_method"},"Account.update_identity(did).create_method()"),(0,r.kt)("p",null,"Add a new Ed25519 (default) verification method to the identity - the  verification method is included as an embedded authentication method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rs"},'account\n    .update_identity(did)\n    .create_method()\n    .scope(MethodScope::Authentication)\n    .fragment("my-auth-key")\n    .apply()\n    .await?;\n')),(0,r.kt)("h5",{id:"returns-3"},"Returns"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"}," {\n    Ok(T),\n    Err(E),\n}\n"))),(0,r.kt)("h4",{id:"accountupdate_identitydidcreate_service"},"Account.update_identity(did).create_service()"),(0,r.kt)("p",null,"Add a new service to the identity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rs"},' account\n    .update_identity(did)\n    .create_service()\n    .fragment("my-service-1")\n    .type_("MyCustomService")\n    .endpoint(Url::parse("https://example.com")?)\n    .apply()\n    .await?;    \n')),(0,r.kt)("h5",{id:"returns-4"},"Returns"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"}," {\n    Ok(T),\n    Err(E),\n }\n"))),(0,r.kt)("h3",{id:"resolve"},(0,r.kt)("a",{parentName:"h3",href:"/identity.rs/decentralized_identifiers/resolve"},"Resolve")),(0,r.kt)("h4",{id:"accountresolve_identitydid"},"Account.resolve_identity(did)"),(0,r.kt)("p",null,"Resolves a DID into a DID Document by using the \u201cRead\u201d operation of the DID method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rs"},"account.resolve_identity(did).await?;\n")),(0,r.kt)("h5",{id:"returns-5"},"Returns"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"IotaDocument"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},'CoreDocument {\n    id: "did:iota:DQE89CN6GTiF2bkqzEBtBDHpZgGyYZ5SK4kymJ4PiAXW",\n    controller: None,\n    also_known_as: [],\n    verification_method: {\n        VerificationMethod {\n            id: "did:iota:DQE89CN6GTiF2bkqzEBtBDHpZgGyYZ5SK4kymJ4PiAXW#_sign-0",\n            controller: "did:iota:DQE89CN6GTiF2bkqzEBtBDHpZgGyYZ5SK4kymJ4PiAXW",\n            key_type: Ed25519VerificationKey2018,\n            key_data: PublicKeyBase58(3hmPzqVWZDiXyBtgnEaxL2uS8mKoDPnw9V4YkmxoKSPE),\n            properties: {},\n        },\n    },\n    authentication: {\n        "did:iota:DQE89CN6GTiF2bkqzEBtBDHpZgGyYZ5SK4kymJ4PiAXW#_sign-0",\n    },\n    assertion_method: {},\n    key_agreement: {},\n    capability_delegation: {},\n    capability_invocation: {},\n    service: {\n        Service {\n            id: "did:iota:DQE89CN6GTiF2bkqzEBtBDHpZgGyYZ5SK4kymJ4PiAXW#my-service-1",\n            type_: "MyCustomService",\n            service_endpoint: Url(https://example.com/),\n            properties: {},\n        },\n    },\n    properties: Properties {\n        properties: Properties {\n            created: "2021-10-19T12:47:26Z",\n            updated: "2021-10-19T12:47:44Z",\n            previous_message_id: MessageId(0000000000000000000000000000000000000000000000000000000000000000),\n            properties: {},\n        },\n        proof: Some(\n            Signature {\n                type_: "JcsEd25519Signature2020",\n                value: Signature(2ujinNZYAd5HYkrSwRe5EZ1b7x9ZFJsZMCowzNTho8naqtt8J9bhbZPFs4pn33SFU64kdKnfAKa12k3p2VVzzjp6),\n                method: "did:iota:DQE89CN6GTiF2bkqzEBtBDHpZgGyYZ5SK4kymJ4PiAXW#_sign-0",\n            },\n        ),\n    },\n}\n'))),(0,r.kt)("h2",{id:"verifiable-credentials-vc"},"Verifiable Credentials (VC)"),(0,r.kt)("p",null,"A Verifiable Credential can be verified by anyone, allowing you to take control of it and share it with anyone."),(0,r.kt)("h3",{id:"sign"},(0,r.kt)("a",{parentName:"h3",href:"/identity.rs/verifiable_credentials/create"},"Sign")),(0,r.kt)("h4",{id:"accountsigndid-key-fragment"},"Account.sign(did, key, fragment)"),(0,r.kt)("p",null,"Sign the Credential with a previously created Verification Method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rs"},'account.sign(did, "key-1", &mut credential).await?;\n')),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"}," {\n    Ok(T),\n    Err(E),\n }\n"))),(0,r.kt)("h2",{id:"verifiable-presentations-vp"},"Verifiable Presentations (VP)"),(0,r.kt)("p",null,"A Verifiable Presentation is the format in which you can share a (collection of) Verifiable Credential(s). It is signed by the subject, to prove control over the Verifiable Credential with a nonce or timestamp."),(0,r.kt)("h3",{id:"create-1"},(0,r.kt)("a",{parentName:"h3",href:"/identity.rs/verifiable_credentials/verifiable_presentations"},"Create")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?i.createElement(h,l(l({ref:t},u),{},{components:n})):i.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);