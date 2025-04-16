//Wed Apr 16 2025 08:31:43 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
try {
  chrome.storage.local.get("codePhone", function (_0x2de6fa) {
    const _0x527d93 = _0x2de6fa.codePhone;
    if (_0x527d93) {
      chrome.runtime.sendMessage({
        type: "checkGululuTime",
        password: _0x527d93
      }, _0x5a45fe => {
        if (_0x5a45fe.data.type == "fcmsl") {
          let _0x65a730 = false;
          const _0x4c863c = new MutationObserver(_0x393d18 => {
            _0x393d18.forEach(_0x25c9c2 => {
              if (_0x25c9c2.type === "childList") {
                _0x33a469("removeWatermarkSwitch").then(_0x3c1f6c => {
                  if (_0x3c1f6c) {
                    let _0x24683f = document.querySelectorAll("div[style*=\"z-index: 2147483647\"][class=\"\"][id]:not([id=\"\"])");
                    if (_0x24683f.length > 0) {
                      if (!_0x65a730) {
                        _0x24683f.forEach(_0x100824 => {
                          let _0x3fd3aa = _0x100824.cloneNode(true);
                          document.head.appendChild(_0x3fd3aa);
                          _0x100824.parentNode.removeChild(_0x100824);
                        });
                        _0x65a730 = true;
                      } else {
                        _0x24683f.forEach(_0x2b948b => {
                          if (_0x2b948b.parentNode.tagName === "BODY" || _0x2b948b.parentNode.tagName === "DIV") {
                            let _0x19fd04 = _0x2b948b.cloneNode(true);
                            document.head.appendChild(_0x19fd04);
                            _0x2b948b.parentNode.removeChild(_0x2b948b);
                          }
                        });
                      }
                    }
                  }
                });
              }
            });
          });
          const _0x1abb9f = {
            childList: true,
            subtree: true
          };
          _0x4c863c.observe(document.body, _0x1abb9f);
          function _0x33a469(_0x201b4e) {
            return new Promise(_0x3a4d7a => {
              try {
                chrome.storage.local.get(_0x201b4e, function (_0x2670d7) {
                  if (chrome.runtime.lastError) {
                    _0x3a4d7a(false);
                  } else {
                    _0x3a4d7a(JSON.parse(_0x2670d7[_0x201b4e]) || false);
                  }
                });
              } catch (_0xaba8c4) {
                _0x3a4d7a(false);
              }
            });
          }
        }
      });
    }
  });
} catch (_0x283df9) {}