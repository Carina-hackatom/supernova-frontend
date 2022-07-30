import * as _102 from "./applications/transfer/v1/genesis";
import * as _103 from "./applications/transfer/v1/query";
import * as _104 from "./applications/transfer/v1/transfer";
import * as _105 from "./applications/transfer/v1/tx";
import * as _106 from "./applications/transfer/v2/packet";
import * as _107 from "./core/channel/v1/channel";
import * as _108 from "./core/channel/v1/genesis";
import * as _109 from "./core/channel/v1/query";
import * as _110 from "./core/channel/v1/tx";
import * as _111 from "./core/client/v1/client";
import * as _112 from "./core/client/v1/genesis";
import * as _113 from "./core/client/v1/query";
import * as _114 from "./core/client/v1/tx";
import * as _115 from "./core/commitment/v1/commitment";
import * as _116 from "./core/connection/v1/connection";
import * as _117 from "./core/connection/v1/genesis";
import * as _118 from "./core/connection/v1/query";
import * as _119 from "./core/connection/v1/tx";
import * as _120 from "./core/port/v1/query";
import * as _121 from "./core/types/v1/genesis";
import * as _122 from "./lightclients/localhost/v1/localhost";
import * as _123 from "./lightclients/solomachine/v1/solomachine";
import * as _124 from "./lightclients/solomachine/v2/solomachine";
import * as _125 from "./lightclients/tendermint/v1/tendermint";
import * as _227 from "./applications/transfer/v1/tx.amino";
import * as _228 from "./core/channel/v1/tx.amino";
import * as _229 from "./core/client/v1/tx.amino";
import * as _230 from "./core/connection/v1/tx.amino";
import * as _231 from "./applications/transfer/v1/tx.registry";
import * as _232 from "./core/channel/v1/tx.registry";
import * as _233 from "./core/client/v1/tx.registry";
import * as _234 from "./core/connection/v1/tx.registry";
import * as _235 from "./applications/transfer/v1/query.lcd";
import * as _236 from "./core/channel/v1/query.lcd";
import * as _237 from "./core/client/v1/query.lcd";
import * as _238 from "./core/connection/v1/query.lcd";
import * as _239 from "./applications/transfer/v1/query.rpc.query";
import * as _240 from "./core/channel/v1/query.rpc.query";
import * as _241 from "./core/client/v1/query.rpc.query";
import * as _242 from "./core/connection/v1/query.rpc.query";
import * as _243 from "./core/port/v1/query.rpc.query";
import * as _244 from "./applications/transfer/v1/tx.rpc.msg";
import * as _245 from "./core/channel/v1/tx.rpc.msg";
import * as _246 from "./core/client/v1/tx.rpc.msg";
import * as _247 from "./core/connection/v1/tx.rpc.msg";
import * as _267 from "./lcd";
import * as _268 from "./rpc.query";
import * as _269 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._102,
        ..._103,
        ..._104,
        ..._105,
        ..._227,
        ..._231,
        ..._235,
        ..._239,
        ..._244
      };
      export const v2 = { ..._106
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._107,
        ..._108,
        ..._109,
        ..._110,
        ..._228,
        ..._232,
        ..._236,
        ..._240,
        ..._245
      };
    }
    export namespace client {
      export const v1 = { ..._111,
        ..._112,
        ..._113,
        ..._114,
        ..._229,
        ..._233,
        ..._237,
        ..._241,
        ..._246
      };
    }
    export namespace commitment {
      export const v1 = { ..._115
      };
    }
    export namespace connection {
      export const v1 = { ..._116,
        ..._117,
        ..._118,
        ..._119,
        ..._230,
        ..._234,
        ..._238,
        ..._242,
        ..._247
      };
    }
    export namespace port {
      export const v1 = { ..._120,
        ..._243
      };
    }
    export namespace types {
      export const v1 = { ..._121
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._122
      };
    }
    export namespace solomachine {
      export const v1 = { ..._123
      };
      export const v2 = { ..._124
      };
    }
    export namespace tendermint {
      export const v1 = { ..._125
      };
    }
  }
  export const ClientFactory = { ..._267,
    ..._268,
    ..._269
  };
}