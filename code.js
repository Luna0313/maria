var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8d033aef-4e2d-4841-999d-d2a7fa91313b","16de7924-066c-4b10-907e-2b73f5055262","a34c3d03-a81a-4f51-8839-c7f679acb74c","414e2aa4-18c0-4425-bc8c-6321f8c5aef3","2abdca3c-e3ea-4695-b1bc-fb955182dc6e","871da3f1-154c-420f-ad3e-9ec16f242dbd","3d9db049-67d4-48bf-890f-25896ddb85c9","7484d7cc-d125-4b68-96bf-faa635899c44","035cdeae-3b24-4ffe-a2f1-f09e7c64287a","e828844a-7a0f-4dda-b7e4-cc3a1d4f84bb","af11beec-bfb2-428c-b07f-2fda611b26cf","ae33e8a5-eebc-46ee-81ab-deed253f5298","b4b892ac-b04d-40b4-b3b5-c3773497dd4c","8c6443e9-505b-4da9-945b-2ffd7ebf179c","c30749b9-e0c4-4a18-8351-fc067c533639","1f4453c5-550e-49c9-beaa-a72bb92a5894","d8e4b5fc-6043-4aa7-b5f9-884b98a4309d","0bb06205-3426-46c9-87e7-8d7638ead74d","87a6322d-4793-48ee-8f8f-f76b99c52e04","51c5c978-8c9c-48d8-ba02-090a22a3b275","9bc63c0f-4491-469d-ac24-5b295e5a2dfc","e6b2c346-110b-4102-b353-435a4860e7dc","7eb361f9-544a-4186-a0f3-17ef11ba1521","6bea655d-b77d-4484-ac57-6f028fa94788","679feb4e-67c3-488e-a8fe-00cca0e0059f","126756de-d805-4410-b688-5c0d8e269ed6","af511284-59c3-4947-b184-e68a910049c1","3351a13c-b266-426f-8c8d-1a6d0e1bb41d","fac7f99f-8c68-4b94-8064-54702bf9b6d4","8f10447e-106a-434d-a1cd-516819245b19","f2fa354c-4de7-4e3a-b683-15af229829d5","0a312f60-603d-477a-be23-9f3dafb0c23e","b278c689-2b28-47b2-a18b-67d64d98c67c","71d64351-8445-4ccd-b771-a36574722853","9fff0c87-bbb8-49a3-b53e-545f306aefa6","07dc2d03-fb51-4b2b-99d3-1aaec204e1c6","19cacb70-52ee-4f34-8925-52ef6944e31f","0cf4230e-4eac-4dec-a1d2-88e6f3e4d26f","a2b73e1d-9f83-499f-b953-1a00b6db8034","77d56d60-72bc-44f4-a96c-5880e7bc832e","396cb2d7-f7fe-4412-b86b-36d979bc898e","7f0829f9-6ed6-48b8-be4d-b335da6fe827","4b256c8b-e89f-4b22-92c0-0cddb9f7a42f","028a18c1-2000-4c50-b2b3-69ca91fa2c4e","68e22a35-774b-464e-860e-7c4a7f55fcf0","a6f88a84-a05e-481d-9afc-7b656c1fdde8","74701fbe-7b27-430f-ad8d-53712ac7830f","2c2e039b-94c7-456a-825b-f71d0ec78481","44bd3fb6-7cae-4e77-85bb-34d835eb42c8","fc641d04-4e6d-4a34-89b5-7136181452d9","06bb7cd9-1911-4bb3-b636-d4563d350bae","c9025956-103d-4e53-bca4-8ec65ad2cac3","07b71c84-8552-491d-933b-d24b5f853960","ee764393-81a1-4760-8a78-04245a5a12c4"],"propsByKey":{"8d033aef-4e2d-4841-999d-d2a7fa91313b":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"CWEdBSaYG1RVaXQXs5Qm5JJY3YYFutGU","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/8d033aef-4e2d-4841-999d-d2a7fa91313b.png"},"16de7924-066c-4b10-907e-2b73f5055262":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":26,"y":25},"frameCount":3,"looping":true,"frameDelay":12,"version":"J6_HRQ_o3sJ5sEMCMJdtLB13t_mUuu8n","loadedFromSource":true,"saved":true,"sourceSize":{"x":52,"y":50},"rootRelativePath":"assets/16de7924-066c-4b10-907e-2b73f5055262.png"},"a34c3d03-a81a-4f51-8839-c7f679acb74c":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"2mMn7Sn3GT7BuP0MNBbQYiyuPld0EuTV","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/a34c3d03-a81a-4f51-8839-c7f679acb74c.png"},"414e2aa4-18c0-4425-bc8c-6321f8c5aef3":{"name":"animation_4","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"b_7ilvpDh6kOwSwg.U1ot1IGsSbuWW6i","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/414e2aa4-18c0-4425-bc8c-6321f8c5aef3.png"},"2abdca3c-e3ea-4695-b1bc-fb955182dc6e":{"name":"animation_5","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"HX50cEGc6CQiqQoVii2Kl18zrEN7qTOv","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/2abdca3c-e3ea-4695-b1bc-fb955182dc6e.png"},"871da3f1-154c-420f-ad3e-9ec16f242dbd":{"name":"animation_6","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"9FmtvV6VJouTv6sTZikWZ7pKohnevHLU","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/871da3f1-154c-420f-ad3e-9ec16f242dbd.png"},"3d9db049-67d4-48bf-890f-25896ddb85c9":{"name":"animation_7","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"qNFTrmC1frN.fuZUrnrCq3Oc3IqUyc7.","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/3d9db049-67d4-48bf-890f-25896ddb85c9.png"},"7484d7cc-d125-4b68-96bf-faa635899c44":{"name":"animation_8","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"SCdtmhfogQjfE3B20rnPDIQBgv4Mwe.p","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/7484d7cc-d125-4b68-96bf-faa635899c44.png"},"035cdeae-3b24-4ffe-a2f1-f09e7c64287a":{"name":"animation_9","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"0E4qKLyBHnL7EA2iHq39U2XDQZL_mUvC","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/035cdeae-3b24-4ffe-a2f1-f09e7c64287a.png"},"e828844a-7a0f-4dda-b7e4-cc3a1d4f84bb":{"name":"animation_10","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"23CrCFllNYn6Nexu1wRQZLFZTiqkxNE_","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/e828844a-7a0f-4dda-b7e4-cc3a1d4f84bb.png"},"af11beec-bfb2-428c-b07f-2fda611b26cf":{"name":"animation_11","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"vN0o5ZYNuZYlG6dzQmmb1BrHk6foWPWU","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/af11beec-bfb2-428c-b07f-2fda611b26cf.png"},"ae33e8a5-eebc-46ee-81ab-deed253f5298":{"name":"animation_12","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"oxiTzCPJH7ZhUieql_vK2PtKvvykrEr.","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/ae33e8a5-eebc-46ee-81ab-deed253f5298.png"},"b4b892ac-b04d-40b4-b3b5-c3773497dd4c":{"name":"animation_13","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"DpLmsEA6.tmfn3sAWjMJ5HFR7.zGNp1d","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/b4b892ac-b04d-40b4-b3b5-c3773497dd4c.png"},"8c6443e9-505b-4da9-945b-2ffd7ebf179c":{"name":"animation_14","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"2AUchtAJ7AoBoWag8IM.zQp72otC4Aqi","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/8c6443e9-505b-4da9-945b-2ffd7ebf179c.png"},"c30749b9-e0c4-4a18-8351-fc067c533639":{"name":"animation_15","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"TPjreZ7dcji_RKo_S.qoADfO1dtIjgpk","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/c30749b9-e0c4-4a18-8351-fc067c533639.png"},"1f4453c5-550e-49c9-beaa-a72bb92a5894":{"name":"animation_16","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"GzMxc06OZi1kmWXCl6kCnHG7v5p8Re21","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/1f4453c5-550e-49c9-beaa-a72bb92a5894.png"},"d8e4b5fc-6043-4aa7-b5f9-884b98a4309d":{"name":"animation_17","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"J5DwYxRRdpgskiNj5p7OsM5ir.evo9m_","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/d8e4b5fc-6043-4aa7-b5f9-884b98a4309d.png"},"0bb06205-3426-46c9-87e7-8d7638ead74d":{"name":"animation_18","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"8e78twsqjzC3jOsMuCQZdzgXMOPlb4nT","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/0bb06205-3426-46c9-87e7-8d7638ead74d.png"},"87a6322d-4793-48ee-8f8f-f76b99c52e04":{"name":"animation_19","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"_.9Kt2ZnQE7fe4Zs.BSjsfakE7VApXMA","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/87a6322d-4793-48ee-8f8f-f76b99c52e04.png"},"51c5c978-8c9c-48d8-ba02-090a22a3b275":{"name":"animation_20","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"Sf0JOiJzzbaFoZY6T1p1eSwefOjtwvBk","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/51c5c978-8c9c-48d8-ba02-090a22a3b275.png"},"9bc63c0f-4491-469d-ac24-5b295e5a2dfc":{"name":"animation_21","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"hRRpFcxIQICAOw3RN24Y6BvAxDOKAh6B","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/9bc63c0f-4491-469d-ac24-5b295e5a2dfc.png"},"e6b2c346-110b-4102-b353-435a4860e7dc":{"name":"animation_22","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"k8hv0AZ096apbFCohPeOpY79N97D.MnE","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/e6b2c346-110b-4102-b353-435a4860e7dc.png"},"7eb361f9-544a-4186-a0f3-17ef11ba1521":{"name":"animation_23","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"xez3Fo.7v1ZHUN8lemVSwjigV7C3taXN","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/7eb361f9-544a-4186-a0f3-17ef11ba1521.png"},"6bea655d-b77d-4484-ac57-6f028fa94788":{"name":"animationS","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"T6WDKlK0CfZ8D.tz3dpPrMYhYpQZUzHg","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/6bea655d-b77d-4484-ac57-6f028fa94788.png"},"679feb4e-67c3-488e-a8fe-00cca0e0059f":{"name":"animationS1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"qFOX.SaTRSMAl9k9zhKoSCUdwggtiLlA","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/679feb4e-67c3-488e-a8fe-00cca0e0059f.png"},"126756de-d805-4410-b688-5c0d8e269ed6":{"name":"animationS2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"0Bb0EyDYYI4lHC.Ta5SwBNYrLPSgRtTw","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/126756de-d805-4410-b688-5c0d8e269ed6.png"},"af511284-59c3-4947-b184-e68a910049c1":{"name":"animationS3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"oTO5ULTIMsLiACxizb8yb4MBOFpKiUWu","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/af511284-59c3-4947-b184-e68a910049c1.png"},"3351a13c-b266-426f-8c8d-1a6d0e1bb41d":{"name":"animationS4","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"KNKYlUI5_iHuD8lM0KqVVXApCbNTLWla","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/3351a13c-b266-426f-8c8d-1a6d0e1bb41d.png"},"fac7f99f-8c68-4b94-8064-54702bf9b6d4":{"name":"animationS5","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"3_L9Y8LloXWX.9fsM08BFEdkE0JteSzf","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/fac7f99f-8c68-4b94-8064-54702bf9b6d4.png"},"8f10447e-106a-434d-a1cd-516819245b19":{"name":"animationS6","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"qABL4XPi0j9YDi4nnvkTKKUa5goOYCRS","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/8f10447e-106a-434d-a1cd-516819245b19.png"},"f2fa354c-4de7-4e3a-b683-15af229829d5":{"name":"animationS7","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"ubK5pG5GExhYhZJzPrNOle3adDf_mex_","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/f2fa354c-4de7-4e3a-b683-15af229829d5.png"},"0a312f60-603d-477a-be23-9f3dafb0c23e":{"name":"animationS8","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"AokX4w8uSS4eIKUeJrmlpLMnMoZKmlMM","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/0a312f60-603d-477a-be23-9f3dafb0c23e.png"},"b278c689-2b28-47b2-a18b-67d64d98c67c":{"name":"animationS9","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"TlphV0aju7FVMKp3pakHap2QqbALro99","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/b278c689-2b28-47b2-a18b-67d64d98c67c.png"},"71d64351-8445-4ccd-b771-a36574722853":{"name":"animationS10","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"g7lTAYQ6R_0ByRpEaeMu1NZI2ZSDAZfO","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/71d64351-8445-4ccd-b771-a36574722853.png"},"9fff0c87-bbb8-49a3-b53e-545f306aefa6":{"name":"animationS11","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"CHBDmwPRnd9hOcrAavN3OWmGPU9JsbMV","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/9fff0c87-bbb8-49a3-b53e-545f306aefa6.png"},"07dc2d03-fb51-4b2b-99d3-1aaec204e1c6":{"name":"animationS12","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"IWsNzGMTxJ.8EDaSQ_ADP.P6rCIE4WC6","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/07dc2d03-fb51-4b2b-99d3-1aaec204e1c6.png"},"19cacb70-52ee-4f34-8925-52ef6944e31f":{"name":"animationS13","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"ciZv6eeeACmEPZS9sxsHzq99zHmEbKdJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/19cacb70-52ee-4f34-8925-52ef6944e31f.png"},"0cf4230e-4eac-4dec-a1d2-88e6f3e4d26f":{"name":"animationS14","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"rYlEqocpivqKtA3HQMzxYkdiDp5QNnNo","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/0cf4230e-4eac-4dec-a1d2-88e6f3e4d26f.png"},"a2b73e1d-9f83-499f-b953-1a00b6db8034":{"name":"animationS15","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"ZxMgiFVqpei3kT101S9Rq15b6NhDGYao","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/a2b73e1d-9f83-499f-b953-1a00b6db8034.png"},"77d56d60-72bc-44f4-a96c-5880e7bc832e":{"name":"animationS16","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"VOxiPfx0h9WGujIAAXcJ_rcM3UKsNB.Q","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/77d56d60-72bc-44f4-a96c-5880e7bc832e.png"},"396cb2d7-f7fe-4412-b86b-36d979bc898e":{"name":"animationS17","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"xdOinoYLGn.7pG4cnyU8TyHgjRa8bITU","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/396cb2d7-f7fe-4412-b86b-36d979bc898e.png"},"7f0829f9-6ed6-48b8-be4d-b335da6fe827":{"name":"animationS18","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"PzvIkvCEgy6s6ZgiQ6bciprtobEKD9C.","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/7f0829f9-6ed6-48b8-be4d-b335da6fe827.png"},"4b256c8b-e89f-4b22-92c0-0cddb9f7a42f":{"name":"animationS19","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"TxqfFK.TOc_r2eJ_lK9u.Z1MxRf80Uhl","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/4b256c8b-e89f-4b22-92c0-0cddb9f7a42f.png"},"028a18c1-2000-4c50-b2b3-69ca91fa2c4e":{"name":"animationS20","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"whmUko2e9zJdeY3wlpno1Y6jPLTUasnK","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/028a18c1-2000-4c50-b2b3-69ca91fa2c4e.png"},"68e22a35-774b-464e-860e-7c4a7f55fcf0":{"name":"animationS21","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"ysSJbhEAqgkqWFpguWTNmg7irq.urgXR","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/68e22a35-774b-464e-860e-7c4a7f55fcf0.png"},"a6f88a84-a05e-481d-9afc-7b656c1fdde8":{"name":"animationS22","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":".3y9D5PoyRUuLn_Gmm.2FtjxnGTzetct","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/a6f88a84-a05e-481d-9afc-7b656c1fdde8.png"},"74701fbe-7b27-430f-ad8d-53712ac7830f":{"name":"animationS23","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"nex2W2UTTMI8TB.Q7gFhhv_qoS__41ft","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/74701fbe-7b27-430f-ad8d-53712ac7830f.png"},"2c2e039b-94c7-456a-825b-f71d0ec78481":{"name":"animationS24","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"aq2DWWWMPjSX4RaCIj9SNh_ESPn6HXbG","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/2c2e039b-94c7-456a-825b-f71d0ec78481.png"},"44bd3fb6-7cae-4e77-85bb-34d835eb42c8":{"name":"animationS25","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"Xvr7IecpitYZJCblGc_L1qOBHhhNs7KP","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/44bd3fb6-7cae-4e77-85bb-34d835eb42c8.png"},"fc641d04-4e6d-4a34-89b5-7136181452d9":{"name":"animationS26","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"BL0KiMvKxbUE1w.2QjQndiaZ1JA4Jfjn","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/fc641d04-4e6d-4a34-89b5-7136181452d9.png"},"06bb7cd9-1911-4bb3-b636-d4563d350bae":{"name":"animationS27","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"Alpncm8lX8Rt54QXK1x6a0keioQoXDpX","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/06bb7cd9-1911-4bb3-b636-d4563d350bae.png"},"c9025956-103d-4e53-bca4-8ec65ad2cac3":{"name":"animationS28","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"A8EChKC7XMhkCf7Fi3JuhLc4ldXgvkI9","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/c9025956-103d-4e53-bca4-8ec65ad2cac3.png"},"07b71c84-8552-491d-933b-d24b5f853960":{"name":"animationS29","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"H5.Iy_JunSSVvj7qVVFrtHRVxo5rvQ8K","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/07b71c84-8552-491d-933b-d24b5f853960.png"},"ee764393-81a1-4760-8a78-04245a5a12c4":{"name":"animationS30","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"pG5cCkYnOrUV6XH6YWpUHbXxIphtbBCs","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/ee764393-81a1-4760-8a78-04245a5a12c4.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// clique duas veses para pular


var parede = createSprite(200,170,1000000000000000000000,10)
parede.shapeColor = "cyan"

var aguá = createSprite(200,400,1000000000000,300)
aguá.shapeColor = "blue"

var barco = createSprite(50,240,10,10)
barco.setAnimation("animation_2")

var tubarão = createSprite(250,250,10,10)
tubarão.setAnimation("animation_3")
var tubarão1 = createSprite(450,250,10,10)
tubarão1.setAnimation("animation_4")
var tubarão2 = createSprite(650,250,10,10)
tubarão2.setAnimation("animation_5")
var tubarão3 = createSprite(850,250,10,10)
tubarão3.setAnimation("animation_6")
var tubarão4 = createSprite(1050,250,10,10)
tubarão4.setAnimation("animation_7")
var tubarão5 = createSprite(1250,250,10,10)
tubarão5.setAnimation("animation_8")
var tubarão6 = createSprite(1450,250,10,10)
tubarão6.setAnimation("animation_9")
var tubarão7 = createSprite(1650,250,10,10)
tubarão7.setAnimation("animation_10")
var tubarão8 = createSprite(1750,250,10,10)
tubarão8.setAnimation("animation_11")
var tubarão9 = createSprite(1850,250,10,10)
tubarão9.setAnimation("animation_12")
var tubarão10 = createSprite(2050,250,10,10)
tubarão10.setAnimation("animation_13")
var tubarão11 = createSprite(2250,250,10,10)
tubarão11.setAnimation("animation_14")
var tubarão12 = createSprite(2450,250,10,10)
tubarão12.setAnimation("animation_15")
var tubarão13 = createSprite(2650,250,10,10)
tubarão13.setAnimation("animation_16")
var tubarão14 = createSprite(2850,250,10,10)
tubarão14.setAnimation("animation_17")
var tubarão15 = createSprite(3050,250,10,10)
tubarão15.setAnimation("animation_18")
var tubarão16 = createSprite(3250,250,10,10)
tubarão16.setAnimation("animation_19")
var tubarão17 = createSprite(3450,250,10,10)
tubarão17.setAnimation("animation_20")
var tubarão18 = createSprite(3650,250,10,10)
tubarão18.setAnimation("animation_21")
var tubarão19 = createSprite(3850,250,10,10)
tubarão19.setAnimation("animation_22")
var tubarão20 = createSprite(4050,250,10,10)
tubarão20.setAnimation("animation_23")

var tubarãoS =createSprite(1000,250,10,10)
tubarãoS.setAnimation("animationS")
var tubarãoS1 =createSprite(2000,250,10,10)
tubarãoS1.setAnimation("animationS1")
var tubarãoS2 =createSprite(3000,250,10,10)
tubarãoS2.setAnimation("animationS2")
var tubarãoS3 =createSprite(4000,250,10,10)
tubarãoS3.setAnimation("animationS3")
var tubarãoS4 =createSprite(5000,250,10,10)
tubarãoS4.setAnimation("animationS4")
var tubarãoS5 =createSprite(4000,250,10,10)
tubarãoS5.setAnimation("animationS5")
var tubarãoS6 =createSprite(3000,250,10,10)
tubarãoS6.setAnimation("animationS6")

tubarãoS.velocityX = -5
tubarãoS1.velocityX = -6
tubarãoS2.velocityX = -7
tubarãoS3.velocityX = -6
tubarãoS4.velocityX = -5
tubarãoS5.velocityX = -6
tubarãoS6.velocityX = -7

tubarão.velocityX = -4
tubarão1.velocityX = -4
tubarão2.velocityX = -4
tubarão3.velocityX = -4
tubarão4.velocityX = -4
tubarão5.velocityX = -4
tubarão6.velocityX = -4
tubarão7.velocityX = -4
tubarão8.velocityX = -4
tubarão9.velocityX = -4
tubarão10.velocityX = -4
tubarão11.velocityX = -4
tubarão12.velocityX = -4
tubarão13.velocityX = -4
tubarão14.velocityX = -4
tubarão15.velocityX = -4
tubarão16.velocityX = -4
tubarão17.velocityX = -4
tubarão18.velocityX = -4
tubarão19.velocityX = -4
tubarão20.velocityX = -4

function draw() {
 barco.velocityY = +1.5

 background("cyan") 
 
if (keyDown("UP_ARROW")) {
  
   barco.velocityY = -3
  
  
}

 barco.bounceOff(aguá)
 barco.bounceOff(parede)
 
 drawSprites()  

    
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
