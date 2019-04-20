
// create by scratch3-extension generator
const ArgumentType = Scratch.ArgumentType;
const BlockType = Scratch.BlockType;
const formatMessage = Scratch.formatMessage;
const log = Scratch.log;

const menuIconURI = "data:image/png;base64,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";
const blockIconURI = "data:image/png;base64,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";

const APIID = "HE1806122017091324"; // your api id
const APIKEY = "c3a820f5337f4fbdb2bf72eeff9975e8"; // your api secret

class hfweather{
  constructor (runtime){
    this.runtime = runtime;
    // communication related
    this.comm = runtime.ioDevices.comm;
    this.session = null;
    this.runtime.registerPeripheralExtension('hfweather', this);
    // session callbacks
    this.reporter = null;
    this.onmessage = this.onmessage.bind(this);
    this.onclose = this.onclose.bind(this);
    this.write = this.write.bind(this);
    // string op
    this.decoder = new TextDecoder();
    this.lineBuffer = '';
    
    this.weather = {};
  }

  onclose (){
    this.session = null;
  }

  write (data, parser = null){
    if (this.session){
      return new Promise(resolve => {
        if (parser){
          this.reporter = {
            parser,
            resolve
          }
        }
        this.session.write(data);
      })
    }
  }

  onmessage (data){
    const dataStr = this.decoder.decode(data);
    this.lineBuffer += dataStr;
    if (this.lineBuffer.indexOf('\n') !== -1){
      const lines = this.lineBuffer.split('\n');
      this.lineBuffer = lines.pop();
      for (const l of lines){
        if (this.reporter){
          const {parser, resolve} = this.reporter;
          resolve(parser(l));
        };
      }
    }
  }

  scan (){
    this.comm.getDeviceList().then(result => {
        this.runtime.emit(this.runtime.constructor.PERIPHERAL_LIST_UPDATE, result);
    });
  }

  getInfo (){
    return {
      id: 'hfweather',
      name: '和风天气',
      color1: '#0FBD8C',
      color2: '#0DA57A',
      menuIconURI: menuIconURI,
      blockIconURI: blockIconURI,
      blocks: [
        {
          opcode: 'getweather',
          blockType: BlockType.COMMAND,
          arguments: {
            LOC: {
              type: ArgumentType.STRING
            }
          },
          text: '读取天气 [LOC]'
        },
        {
          opcode: 'onweather',
          blockType: BlockType.HAT,
          isEdgeActivated: false,
          text: '当天气返回'
        },
        {
          opcode: 'temp',
          blockType: BlockType.REPORTER,
          text: '温度'
        },
        {
          opcode: 'cond',
          blockType: BlockType.REPORTER,
          text: '天气状况'
        },
        {
          opcode: 'hum',
          blockType: BlockType.REPORTER,
          text: '湿度'
        },
        {
          opcode: 'pcpn',
          blockType: BlockType.REPORTER,
          text: '降水量'
        },
        {
          opcode: 'getforecast',
          blockType: BlockType.COMMAND,
          arguments: {
            DAY: {
              type: ArgumentType.NUMBER,
              defaultValue: 1
            },
            LOC: {
              type: ArgumentType.STRING
            }
          },
          text: '读取 [LOC] 未来 [DAY] 的天气'
        },
        {
          opcode: 'onforecast',
          blockType: BlockType.HAT,
          isEdgeActivated: false,
          text: '当天气预报返回'
        }
      ]
    }
  }

getweather (args, util){
  const LOC = args.LOC;
  const url = new URL("https://free-api.heweather.net/s6/weather/now?");
  url.searchParams.append('location', LOC || 'auto_ip')
  url.searchParams.append('key', APIKEY)

  return fetch(url).then(res => {
    if (res.ok) {
      res.json().then(json => {
        this.weather = json.HeWeather6[0].now;
        this.runtime.startHats('hfweather_onweather', {});
      });
    }
  });
}

onweather (args, util){
  return true;
}

temp (args, util){
  return this.weather.tmp;
}

cond (args, util){
  return this.weather.cond_txt;
}

hum (args, util){
  return this.weather.hum;
}

pcpn (args, util){
  return this.weather.pcpn;
}

getforecast (args, util){
  const LOC = args.LOC;
  let DAY = args.DAY;
  const url = new URL("https://free-api.heweather.net/s6/weather/forecast?");
  url.searchParams.append('location', LOC || 'auto_ip')
  url.searchParams.append('key', APIKEY)

  return fetch(url).then(res => {
    if (res.ok) {
      res.json().then(json => {
        if (!DAY && DAY<1){
          DAY = 1
        }
        this.weather = json.HeWeather6[0].daily_forecast[DAY-1];
        this.weather.tmp = (parseFloat(this.weather.tmp_max) + parseFloat(this.weather.tmp_min))/2;
        this.weather.cond_txt = this.weather.cond_txt_d;
        this.runtime.startHats('hfweather_onforecast', {});
      });
    }
  });
}

onforecast (args, util){
  return true;
}

}

module.exports = hfweather;
