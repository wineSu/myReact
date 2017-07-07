"use strict";

var md5 = require("md5");

function compareModules(a, b) {
  if (a.resource < b.resource) {
    return -1;
  }
  if (a.resource > b.resource) {
    return 1;
  }
  return 0;
}

function getModuleSource(module) {
  var _source = module._source || {};
  return _source._value || "";
}

function concatenateSource(result, module_source) {
  return result + module_source;
}

function getHashes(chunks) {
  var _chunks = chunks;
  var _hashes = '';
  _chunks.forEach(function(chunk) {
    _hashes += chunk.hash;
    if (chunk.chunks && chunk.chunks.length > 0) {
      _hashes += getHashes(chunk.chunks);
    }
  });

  return _hashes;
}

function WebpackSplitHash() {}

WebpackSplitHash.prototype.apply = function(compiler) {
  compiler.plugin("compilation", function(compilation) {
    compilation.plugin("chunk-hash", function(chunk, chunkHash) {
      var source = chunk.modules.sort(compareModules).map(getModuleSource).reduce(concatenateSource, '');
      // get children chunks hashes in case child chunk impact main file's hash
      var child_hashes = '';
      if (chunk.entry && chunk.name && chunk.chunks && chunk.chunks.length > 0) {
        child_hashes = getHashes(chunk.chunks);
      }

      var chunk_hash = child_hashes === '' ? md5(source) : md5(source + child_hashes);
      chunkHash.digest = function() {
        return chunk_hash;
      };
    });
  });
};

module.exports = WebpackSplitHash;
