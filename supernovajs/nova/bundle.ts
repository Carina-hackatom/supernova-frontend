import * as _126 from "./gal/v1/genesis";
import * as _127 from "./gal/v1/params";
import * as _128 from "./gal/v1/query";
import * as _129 from "./gal/v1/tx";
import * as _130 from "./ibcstaking/v1/genesis";
import * as _131 from "./ibcstaking/v1/params";
import * as _132 from "./ibcstaking/v1/query";
import * as _133 from "./ibcstaking/v1/tx";
import * as _134 from "./mint/v1/genesis";
import * as _135 from "./mint/v1/mint";
import * as _136 from "./mint/v1/query";
import * as _137 from "./oracle/v1/genesis";
import * as _138 from "./oracle/v1/params";
import * as _139 from "./oracle/v1/query";
import * as _140 from "./oracle/v1/tx";
import * as _248 from "./gal/v1/tx.amino";
import * as _249 from "./ibcstaking/v1/tx.amino";
import * as _250 from "./oracle/v1/tx.amino";
import * as _251 from "./gal/v1/tx.registry";
import * as _252 from "./ibcstaking/v1/tx.registry";
import * as _253 from "./oracle/v1/tx.registry";
import * as _254 from "./gal/v1/query.lcd";
import * as _255 from "./mint/v1/query.lcd";
import * as _256 from "./oracle/v1/query.lcd";
import * as _257 from "./gal/v1/query.rpc.query";
import * as _258 from "./ibcstaking/v1/query.rpc.query";
import * as _259 from "./mint/v1/query.rpc.query";
import * as _260 from "./oracle/v1/query.rpc.query";
import * as _261 from "./gal/v1/tx.rpc.msg";
import * as _262 from "./ibcstaking/v1/tx.rpc.msg";
import * as _263 from "./oracle/v1/tx.rpc.msg";
import * as _270 from "./lcd";
import * as _271 from "./rpc.query";
import * as _272 from "./rpc.tx";
export namespace nova {
  export namespace gal {
    export const v1 = { ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._248,
      ..._251,
      ..._254,
      ..._257,
      ..._261
    };
  }
  export namespace ibcstaking {
    export const v1 = { ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._249,
      ..._252,
      ..._258,
      ..._262
    };
  }
  export namespace mint {
    export const v1 = { ..._134,
      ..._135,
      ..._136,
      ..._255,
      ..._259
    };
  }
  export namespace oracle {
    export const v1 = { ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._250,
      ..._253,
      ..._256,
      ..._260,
      ..._263
    };
  }
  export const ClientFactory = { ..._270,
    ..._271,
    ..._272
  };
}