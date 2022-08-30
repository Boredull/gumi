const logger = {
  log(...args) {
    console.log("[BOOKING]: ", ...args);
  },
  warn(...args) {
    console.warn("[BOOKING]: ", ...args);
  },
  error(...args) {
    console.error("[BOOKING]: ", ...args);
  },
};

// console.log("this is app-block");

// var bookingDays = [];
!(function (t) {
  "use strict";
  const e = "hello-week",
    s = "day",
    a = "month",
    n = "navigation",
    i = "next",
    r = "period",
    o = "prev",
    l = "rtl",
    h = "week",
    d = "is-begin-range",
    c = "is-disabled",
    g = "is-end-range",
    u = "is-highlight",
    y = "is-selected",
    f = "is-range",
    p = "is-today",
    b = "is-weekend",
    D = {
      FRIDAY: 5,
      MONDAY: 1,
      SATURDAY: 6,
      SUNDAY: 0,
      THURSDAY: 4,
      TUESDAY: 2,
      WEDNESDAY: 3,
    },
    S = "margin-right",
    m = "margin-left";
  function v(t) {
    return null != t;
  }
  function M(t) {
    return null !== t && "object" == typeof t;
  }
  function k(t) {
    return null !== t && Array.isArray(t);
  }
  function Y(t) {
    return "string" == typeof t;
  }
  function O(t, e, s) {
    return t.setAttribute(e, s);
  }
  function R(t, e) {
    return t.classList.add(e);
  }
  function w(t, e) {
    return t.classList.remove(e);
  }
  function A(t, e) {
    return v(e) ? e.querySelector(`.${t}`) : document.querySelector(`.${t}`);
  }
  function H(t, e, s) {
    for (const a of Object.keys(t.attributes[s])) O(e, `data-${a}`, t.attributes[s][a]);
  }
  function T(t, e, s) {
    Y(t.attributes[s])
      ? (e.className = t.attributes[s])
      : k(t.attributes[s]) &&
        t.attributes[s].forEach((t) => {
          R(e, t);
        });
  }
  function x(t, e, s) {
    if (Y(t.attributes[s])) e.style = t.attributes[s];
    else if (M(t.attributes[s])) for (const a of Object.keys(t.attributes[s])) e.style[a] = t.attributes[s][a];
  }
  function C(t, e, ...s) {
    const a = { nodeName: t };
    return e && (a.attributes = e), s.length && (a.children = [].concat(...s)), a;
  }
  function F(t, e) {
    if (t.split) return document.createTextNode(t);
    const s = document.createElement(t.nodeName);
    return (
      v(t.attributes) &&
        (function (t, e) {
          for (const s of Object.keys(t.attributes))
            "class" === s
              ? T(t, e, s)
              : "style" === s
              ? x(t, e, s)
              : "data" === s
              ? H(t, e, s)
              : O(e, s, t.attributes[s]);
        })(t, s),
      (t.children || []).forEach((t) => s.appendChild(F(t))),
      e ? e.appendChild(s) : s
    );
  }
  function N(t, e) {
    return Object.assign(t, e);
  }
  function L(t, e) {
    return Array.prototype.slice.call(t).indexOf(e) + 1;
  }
  function j(t) {
    let e = [];
    function s(t) {
      const s = [];
      for (const a of e) e[a] === t ? (t = null) : s.push(e[a]);
      e = s;
    }
    return (
      (t = t || {}),
      {
        setState: function (s, a) {
          t = a ? s : N(N({}, t), s);
          const n = e;
          for (const e of n) n[e](t);
        },
        subscribe: (t) => (
          e.push(t),
          () => {
            s(t);
          }
        ),
        unsubscribe: s,
        getState: () => t,
      }
    );
  }
  const E = {
      store: j({
        selector: ".hello-week",
        lang: "en",
        langFolder: "./langs/",
        format: "DD/MM/YYYY",
        monthShort: !1,
        weekShort: !0,
        defaultDate: null,
        minDate: null,
        maxDate: null,
        disableDaysOfWeek: null,
        timezoneOffset: new Date().getTimezoneOffset(),
        disableDates: null,
        weekStart: 0,
        daysSelected: null,
        daysHighlight: null,
        multiplePick: !1,
        disablePastDays: !1,
        todayHighlight: !0,
        range: !1,
        locked: !1,
        rtl: !1,
        nav: ["◀", "▶"],
        beforeLoad: () => {},
        onLoad: () => {},
        onNavigation: () => {},
        onSelect: (t) => t,
        beforeCreateDay: (t) => t,
      }),
      set(t) {
        this.store.setState(t);
      },
      get() {
        return this.store.getState();
      },
    },
    W = {
      store: j({}),
      set(t) {
        this.store.setState(t);
      },
      get() {
        return this.store.getState();
      },
    };
  function U(t, e) {
    const s = v(t) ? new Date(t) : new Date();
    return (e = e || s.getTimezoneOffset()), s.setTime(s.getTime() + 60 * e * 1e3), s;
  }
  function I(t, e) {
    const s = U(t, e);
    return (
      (a = s.getDate()), (n = s.getMonth()), `${s.getFullYear()}-${("0" + (n + 1)).slice(-2)}-${("0" + a).slice(-2)}`
    );
    var a, n;
  }
  function J(t, e, s) {
    const { format: a } = E.get(),
      { months: n, monthsShort: i } = W.get(),
      r = U(t, s);
    return (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e || a).replace(
      "dd",
      r.getDate().toString()
    )).replace("DD", (r.getDate() > 9 ? r.getDate() : "0" + r.getDate()).toString())).replace(
      "mm",
      (r.getMonth() + 1).toString()
    )).replace("MMM", n[r.getMonth()])).replace(
      "MM",
      (r.getMonth() + 1 > 9 ? r.getMonth() + 1 : "0" + (r.getMonth() + 1)).toString()
    )).replace("mmm", i[r.getMonth()])).replace("yyyy", r.getFullYear().toString())).replace(
      "YYYY",
      r.getFullYear().toString()
    )).replace("YY", r.getFullYear().toString().substring(2))).replace("yy", r.getFullYear().toString().substring(2)));
  }
  function P(t) {
    const e = new Date(t);
    return Number(
      "" + e.getFullYear() + (e.getMonth() + 1) + (e.getDate() > 9 ? e.getDate() : "0" + e.getDate()).toString()
    );
  }
  function $(t, e) {
    return P(t) > P(e);
  }
  function q(t, e) {
    return P(t) < P(e);
  }
  function z(t, e) {
    return P(t) === P(e);
  }
  function _(t, e) {
    return z(t, e) || $(t, e);
  }
  function B(t, e) {
    return z(t, e) || q(t, e);
  }
  function G(t) {
    return v(t) ? new Date(t) : new Date();
  }
  function K(t) {
    const e = G(t);
    return I(e.setDate(e.getDate() - 1));
  }
  function Q(t) {
    const e = G(t);
    return I(e.setDate(e.getDate() + 1));
  }
  class V {
    options;
    langs;
    selector;
    daysOfMonth;
    todayDate = I(new Date());
    date = new Date();
    defaultDate;
    calendar;
    days;
    isRTL;
    daysHighlight;
    intervalRange = {};
    daysSelected = [];
    lastSelectedDay;
    constructor(t) {
      (this.langs = W), (this.options = E), this.options.set(t);
      const { calendar: s, selector: d } = (function (t, s) {
        const d = {};
        if (!v(t.selector)) throw new Error("You need to specify a selector!");
        return (
          Y(t.selector)
            ? (d.selector = t.selector ? document.querySelector(t.selector) : t.selector)
            : (d.selector = t.selector),
          v(d.selector) ? t.selector !== e && R(d.selector, e) : (d.selector = F(C("div", { class: [t.selector, e] }))),
          (d.calendar = {}),
          (d.calendar.navigation = A(n, d.selector)),
          v(d.calendar.navigation) || (d.calendar.navigation = F(C("div", { class: n }), d.selector)),
          v(t.nav[0]) &&
            ((d.calendar.prevMonth = F(C("div", { class: o }, t.nav[0]), d.calendar.navigation)),
            d.calendar.prevMonth.addEventListener("click", () => s.prev.cb())),
          (d.calendar.period = A(r, d.selector)),
          v(d.calendar.period) || (d.calendar.period = F(C("div", { class: r }), d.calendar.navigation)),
          v(t.nav[1]) &&
            ((d.calendar.nextMonth = F(C("div", { class: i }, t.nav[1]), d.calendar.navigation)),
            d.calendar.nextMonth.addEventListener("click", () => s.next.cb())),
          (d.calendar.week = A(h, d.selector)),
          v(d.calendar.week) || (d.calendar.week = F(C("div", { class: h }), d.selector)),
          (d.calendar.month = A(a, d.selector)),
          v(d.calendar.month) || (d.calendar.month = F(C("div", { class: a }), d.selector)),
          t.rtl && (R(d.calendar.week, l), R(d.calendar.month, l)),
          d
        );
      })(this.options.get(), {
        prev: { cb: () => this.prev() },
        next: { cb: () => this.next() },
      });
      (this.selector = d), (this.calendar = s), this.beforeCreate();
    }
    destroy() {
      this.removeStatesClass(), this.selector.remove();
    }
    prev() {
      const { onNavigation: t } = this.options.get(),
        e = this.date.getMonth() - 1;
      this.date.setMonth(e), this.update(), t();
    }
    next() {
      const { onNavigation: t } = this.options.get(),
        e = this.date.getMonth() + 1;
      this.date.setMonth(e), this.update(), t();
    }
    prevYear() {
      const { onNavigation: t } = this.options.get(),
        e = this.date.getFullYear() - 1;
      this.date.setFullYear(e), this.update(), t();
    }
    nextYear() {
      const { onNavigation: t } = this.options.get(),
        e = this.date.getFullYear() + 1;
      this.date.setFullYear(e), this.update(), t();
    }
    update() {
      this.clearCalendar(), this.mounted();
    }
    goToDate(t = this.todayDate) {
      (this.date = new Date(t)), this.date.setDate(1), this.update();
    }
    getDaySelected() {
      const { format: t } = this.options.get();
      return this.daysSelected.sort((t, e) => P(t) - P(e)).map((e) => J(e, t));
    }
    getLastDaySelected() {
      return this.lastSelectedDay;
    }
    getDaysHighlight() {
      return this.daysHighlight;
    }
    getMonth() {
      return this.date.getMonth() + 1;
    }
    getYear() {
      return this.date.getFullYear();
    }
    setOptions(t, e) {
      M(t) && this.options.set(t), "function" == typeof e && this.options.set(e(this.options.get())), this.update();
    }
    setDaysHighlight(t) {
      (this.daysHighlight = [...this.daysHighlight, ...t]), this.update();
    }
    setIntervalRange(t) {
      const { range: e } = this.options.get();
      if (e && t && k(t)) {
        const [e, s] = t;
        this.intervalRange = { begin: e, end: s };
      }
    }
    setMinDate(t) {
      this.options.set({ minDate: K(t) });
    }
    setMaxDate(t) {
      this.options.set({ maxDate: Q(t) });
    }
    beforeCreate() {
      const { rtl: t } = this.options.get();
      (this.isRTL = t ? S : m),
        Promise.resolve({
          default: {
            days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          },
        })
          .then((t) => t)
          .then((t) => {
            this.langs.set(t.default);
          })
          .then(() => this.beforeMount());
    }
    beforeMount() {
      const {
        daysHighlight: t,
        daysSelected: e,
        defaultDate: s,
        timezoneOffset: a,
        minDate: n,
        maxDate: i,
        beforeLoad: r,
        onLoad: o,
      } = this.options.get();
      (this.daysHighlight = t || []),
        (this.daysSelected = e || []),
        r(),
        s &&
          ((this.date = U(s, a)), (this.defaultDate = U(s, a)), this.defaultDate.setDate(this.defaultDate.getDate())),
        this.date.setDate(1),
        n && this.setMinDate(n),
        i && this.setMaxDate(i),
        this.mounted(),
        o();
    }
    selectDay(t) {
      const { range: e } = this.options.get();
      this.daysOfMonth = this.selector.querySelectorAll("." + a + " ." + s);
      for (const s of Object.keys(this.daysOfMonth))
        this.handleClickInteraction(this.daysOfMonth[s], t), e && this.handleMouseInteraction(this.daysOfMonth[s]);
    }
    handleClickInteraction(t, e) {
      const { range: s, multiplePick: a, onSelect: n } = this.options.get();
      t.addEventListener("click", (t) => {
        const i = L(this.daysOfMonth, t.target);
        var r, o;
        this.days[i].locked ||
          ((this.lastSelectedDay = this.days[i].date),
          s ||
            (a
              ? (this.days[i].date &&
                  (this.daysSelected = this.daysSelected.filter((t) => P(t) !== P(this.lastSelectedDay))),
                this.days[i].isSelected || this.daysSelected.push(this.lastSelectedDay))
              : (this.days[i].locked || this.removeStatesClass(),
                (this.daysSelected = []),
                this.daysSelected.push(this.lastSelectedDay))),
          (r = t.target),
          (o = y),
          r.classList.toggle(o),
          (this.days[i].isSelected = !this.days[i].isSelected),
          s &&
            (this.intervalRange.begin &&
              this.intervalRange.end &&
              ((this.intervalRange = {}), this.removeStatesClass()),
            this.intervalRange.begin &&
              !this.intervalRange.end &&
              ((this.intervalRange.end = this.days[i].date),
              (this.daysSelected = (function (t, e) {
                const s = [];
                let a = t;
                const n = function (t) {
                  const e = new Date(this.valueOf());
                  return e.setDate(e.getDate() + t), e.getTime();
                };
                for (; a <= e; ) s.push(J(a)), (a = n.call(a, 1));
                return s;
              })(this.intervalRange.begin, this.intervalRange.end)),
              R(t.target, g),
              this.intervalRange.begin > this.intervalRange.end &&
                ((this.intervalRange = {}), this.removeStatesClass())),
            this.intervalRange.begin || (this.intervalRange.begin = this.days[i].date),
            R(t.target, y)),
          n(this.days[i]),
          e && e(this.days[i]));
      });
    }
    handleMouseInteraction(t) {
      t.addEventListener("mouseover", (t) => {
        const e = L(this.daysOfMonth, t.target);
        if (!(!this.intervalRange.begin || (this.intervalRange.begin && this.intervalRange.end))) {
          this.removeStatesClass();
          for (let t = 1; t <= Object.keys(this.days).length; t++)
            (this.days[t].isSelected = !1),
              _(this.days[e].date, this.intervalRange.begin) &&
                _(this.days[t].date, this.intervalRange.begin) &&
                B(this.days[t].date, this.days[e].date) &&
                (R(this.days[t].element, y),
                R(this.days[t].element, f),
                z(this.days[t].date, this.intervalRange.begin) && R(this.days[t].element, d));
        }
      });
    }
    creatWeek(t) {
      F(C("span", { class: s }, t), this.calendar.week);
    }
    createMonth() {
      const t = this.date.getMonth();
      for (; this.date.getMonth() === t; ) this.createDay(this.date), this.date.setDate(this.date.getDate() + 1);
      this.date.setMonth(this.date.getMonth() - 1), this.selectDay();
    }
    createDay(t) {
      const e = t.getDate(),
        a = t.getDay();
      let n = {
        day: e,
        date: I(t),
        isWeekend: !1,
        locked: !1,
        isToday: !1,
        isRange: !1,
        isSelected: !1,
        isHighlight: !1,
        events: void 0,
        attributes: { class: [s], style: {} },
        node: void 0,
        element: void 0,
      };
      const {
        locked: i,
        disableDaysOfWeek: r,
        disablePastDays: o,
        minDate: l,
        maxDate: h,
        disableDates: u,
        todayHighlight: S,
        weekStart: m,
        beforeCreateDay: v,
      } = this.options.get();
      (this.days = this.days || {}),
        (a !== D.SUNDAY && a !== D.SATURDAY) || (n.attributes.class.push(b), (n.isWeekend = !0)),
        (i ||
          (r && r.includes(a)) ||
          (o && B(this.date, this.defaultDate)) ||
          (l && _(l, n.date)) ||
          (h && B(h, n.date))) &&
          (n.attributes.class.push(c), (n.locked = !0)),
        u && this.disabledDays(n),
        z(this.todayDate, n.date) && ((n.isToday = !0), S && n.attributes.class.push(p)),
        this.daysSelected.find((t) => {
          z(t, n.date) && (n.attributes.class.push(y), (n.isSelected = !0));
        }),
        (function (t, e, s) {
          return $(s, t) && q(s, e);
        })(this.intervalRange.begin, this.intervalRange.end, n.date) && (n.attributes.class.push(f), (n.isRange = !0)),
        z(n.date, this.intervalRange.begin) && n.attributes.class.push(d),
        z(n.date, this.intervalRange.end) && n.attributes.class.push(g),
        this.daysHighlight && this.highlightDays(n),
        1 === n.day &&
          (n.attributes.style[this.isRTL] =
            m === D.SUNDAY
              ? a * (100 / Object.keys(D).length) + "%"
              : a === D.SUNDAY
              ? (Object.keys(D).length - m) * (100 / Object.keys(D).length) + "%"
              : (a - 1) * (100 / Object.keys(D).length) + "%"),
        (n.node = C("div", n.attributes, n.day.toString())),
        (n = v(n)),
        (n.element = F(n.node, this.calendar.month)),
        (this.days[n.day] = n);
    }
    disabledDays(t) {
      const { disableDates: e } = this.options.get();
      k(e[0])
        ? e.map((e) => {
            _(t.date, e[0]) && B(t.date, e[1]) && (t.attributes.class.push(c), (t.locked = !0));
          })
        : e.map((e) => {
            z(t.date, e) && (t.attributes.class.push(c), (t.locked = !0));
          });
    }
    highlightDays(t) {
      for (const e in this.daysHighlight)
        this.daysHighlight[e].days[0] instanceof Array
          ? this.daysHighlight[e].days.map((s) => {
              _(t.date, s[0]) && B(t.date, s[1]) && this.computedAttributes(e, t);
            })
          : this.daysHighlight[e].days.map((s) => {
              z(t.date, s) && this.computedAttributes(e, t);
            });
    }
    computedAttributes(t, e) {
      const { attributes: s, ...a } = this.daysHighlight[t];
      delete a.days, (e = N(e, a));
      for (const t in s)
        e.attributes[t] && s[t] ? (e.attributes[t] = N(e.attributes[t], s[t])) : s[t] && (e.attributes[t] = s[t]);
      e.attributes.class.push(u), (e.isHighlight = !0);
    }
    monthsAsString(t) {
      const { monthShort: e } = this.options.get(),
        { monthsShort: s, months: a } = this.langs.get();
      return e ? s[t] : a[t];
    }
    weekAsString(t) {
      const { weekShort: e } = this.options.get(),
        { daysShort: s, days: a } = this.langs.get();
      return e ? s[t] : a[t];
    }
    mounted() {
      this.calendar.period &&
        (this.calendar.period.innerHTML = this.monthsAsString(this.date.getMonth()) + " " + this.date.getFullYear());
      const t = [],
        { weekStart: e } = this.options.get(),
        { daysShort: s } = this.langs.get();
      this.calendar.week.textContent = "";
      for (let a = e; a < s.length; a++) t.push(a);
      for (let s = 0; s < e; s++) t.push(s);
      for (const e of t) this.creatWeek(this.weekAsString(e));
      this.createMonth();
    }
    clearCalendar() {
      this.calendar.month.textContent = "";
    }
    removeStatesClass() {
      for (const t of Object.keys(this.daysOfMonth))
        w(this.daysOfMonth[t], y),
          w(this.daysOfMonth[t], f),
          w(this.daysOfMonth[t], d),
          w(this.daysOfMonth[t], g),
          (this.days[+t + 1].isSelected = !1);
    }
  }
  const X = V;
  (window.HelloWeek = X),
    (t.HelloWeek = X),
    (t.createElement = C),
    (t.default = V),
    (t.el = C),
    (t.render = F),
    Object.defineProperty(t, "__esModule", { value: !0 });
})({});

const BASE_URL = window.origin;
// @ts-ignore
// 区分开发环境
// const IS_DEV = process.env.NODE_ENV !== "production";
const _fetch = window.fetch;
const makeUrl = (url, params = {}) => {
  const searchParams = new URLSearchParams(params);
  const query = searchParams.toString();
  return url.endsWith("?") ? `${url}${query}` : `${url}?${query}`;
};
/**
 * @param { string } url
 * @param { RequestInit } _options
 * @returns
 */
const fetcher = (url, _options = {}) => {
  const options = Object.assign({}, _options);
  options.mode = _options.mode || "cors";
  options.method = options.method || "get";
  return _fetch(url, options).then((res) => res.json());
};

// const gShopline = window.Shopline;
// const gEventBus = gShopline.event;
const _productURL = decodeURIComponent(window.location.pathname).split("/");
let gProductHandle = "";
if (_productURL && _productURL.length) {
  gProductHandle = _productURL[_productURL.length - 1];
}
function getProduct() {
  return fetcher(`${BASE_URL}/api/product/products.json?handle=${gProductHandle}`).then((res) => res.products[0]);
}

async function initBooking() {
  const product = await getProduct();
  // ctx.gProduct = product;
  console.log("product: ", JSON.stringify(product));
  if (!product) {
    // logger.error('Failed to find current product: ');
    throw new Error("Failed to find current product: ");
  }
  if (!Array.isArray(product.tags)) {
    throw new Error("Current product is not a booking product");
  }
  if (!product.tags.includes("booking")) {
    throw new Error("Current product is not a booking product");
  }

  let sku;

  window.Shopline.event.on("DataReport::ViewContent", ({ data }) => {
    sku = data.content_sku_id;

    console.log(" sku: ", sku);
  });

  // 请求预约日期信息
  const scheduleData = await fetcher(
    makeUrl("https://api.shopflex.io/reserve/sku/datePlanList", {
      platformProductId: product.id,
      platformVariantId: sku,
    })
  )
    .then((res) => {
      if (res.code === 200) return res.data;
      return Promise.reject(
        new Error(`Failed to fetch schedule data, platformProductId = ${product.id}, platformVariantId = ${sku}`)
      );
    })
    .catch((err) => {
      // warning(translation.failed_to_find_the_schedule);
      throw err;
    });
  console.log("scheduleData: ", JSON.stringify(scheduleData));

  const schedules = scheduleData || {};
  const days = Object.keys(schedules).filter((date) =>{
          return /\d{2}-\d{2}-\d{2}/.test(date);
         });
  console.log('day',days);
  //  bookingDays = day.concat();
  //  console.log('bookingDays',bookingDays);

  const today = new Date();
  const yesterday = new Date(today);
  const bookButton = document.querySelector(".bookButton");
  const selectDate = document.querySelector(".selectDate");

  yesterday.setDate(yesterday.getDate() - 1);
  let toDay = today.toISOString().substring(0, 10);
  let selectDay;
  const calendar = new HelloWeek({
    selector: ".calendar",
    format: "YYYY-MM-DD",
    //   daysHighlight:[
    //     {
    //     days: days,
    //     // backgroundColor:'#6495ed',
    //     color:'#fff',
    //     title: 'bookingDay',
    //   }
    // ]

    disableDates: [["2020-03-02", yesterday]],

    onSelect: () => {
      selectDay = calendar.getDaySelected()[0];
      console.log(selectDay);
      selectDate.style.display = selectDay >= toDay ? "none" : "flex";
      timeSelect.style.display = selectDay >= toDay ? "block" : "none";
      bookButton.style.display = selectDay >= toDay ? "flex" : "none";
    },
  });

  const timeSelect = document.querySelector(".timeSelect");
  const locationLabel = document.querySelector(".location");
  const resource = document.querySelector(".resource");
  // const Price = document.querySelector(".Price");
  resource.innerHTML = scheduleData.resources.map((resource) => `<option >${resource.name}</option>`);
  locationLabel.innerHTML = scheduleData.locations.map((location) => `<option >${location.name}</option>`);
  locationLabel.innerHTML += "<option> </option>";
  resource.innerHTML += scheduleData.requireStatus == 1 ? "" : "<option> </option>";
  // Price.innerHTML = `Price: ${product.price}`;
  // console.log(product.price);
  let start = "";
  let end = "";
  // let amount;
  let gResourceValue;
  

  function getRightTime() {
    let locationStart = "";
    let locationEnd = "";
    let resourceStart = "";
    let resourceEnd = "";
    const resourceIndex = resource.selectedIndex;
    const resourceValue = resource.options[resourceIndex].value;
    const locationIndex = locationLabel.selectedIndex;
    gResourceValue = resourceValue;
    const locationValue = locationLabel.options[locationIndex].value;
    // console.log(locations.options[locationIndex].value);
    if (locationValue) {
      const times = getTimes(locationValue, scheduleData.locations);
      // console.log(times);
      locationStart = times[0].start;
      locationEnd = times[0].end;
      // console.log("locationStart", locationStart);
      // console.log("locationEnd", locationEnd);
    } else {
      locationStart = "00:00";
      locationEnd = "24:00";
    }

    // 封装通过下拉框选中的地址找到对应的时间段
    function getTimes(name, arr) {
      return arr.find((item) => item.name == name).businessHours;
    }

    
    // console.log(resource.options[resourceIndex].value);

    if (resourceValue) {
      const times = getTimes(resourceValue, scheduleData.resources);
      resourceStart = times[0].start;
      resourceEnd = times[0].end;

      // console.log("resourceStart", resourceStart);
      // console.log("resourceEnd", resourceEnd);
    } else {
      resourceStart = "00:00";
      resourceEnd = "24:00";
    }

    start = locationStart > resourceStart ? locationStart : resourceStart;
    end = locationEnd < resourceEnd ? locationEnd : resourceEnd;
    console.log(start);
    console.log(end);

    if (start < end ) {
      timeSelect.innerHTML += `<option selected disabled hidden>${start} - ${end} </option>`;
      let timeDifference = end.substring(0, 2) - start.substring(0, 2);
      for (let i = 0; i < timeDifference; i++) {
        let updateStart = parseInt(start.substring(0, 2)) + 1 + ":" + "00";
        timeSelect.innerHTML += `<option >${start} - ${updateStart} </option>`;
        start = updateStart;
      }
    } else {
      timeSelect.innerHTML = `<option selected disabled hidden>none</option>`;
    }
    // console.log((end)/1000);
    // console.log(start.substring(0,2));
    // console.log(end.substring(0,2)-start.substring(0,2));
    // console.log(start.split(":").join(""));
    // if(start.substring(0,2)<end.substring(0,2)){
    // let i = 1;
    //  let updateStart = [...(start.split(":").join(""))].splice(2,0,":").join("");
    // let updateStart = [...(start.split(":").join(""))];
    //  console.log(updateStart);

    //  console.log(updateStart.splice(2,0,":").join(""));
    // timeSelect.innerHTML += `<option >${start} - ${updateStart} </option>`

    
  }
// 判断加购数量是否超过剩余数量
  function getCapacity(name, arr) {
    return arr.find((item) => item.name == name).capacity;
  }

  getRightTime();

  

  let amount ;
  const stepper_before = document.querySelector(".stepper-before");
  const stepper_after = document.querySelector(".stepper-after");
  const stepper_input = document.querySelector(".stepper-input");
  let capacity = getCapacity(gResourceValue, scheduleData.resources);
  console.log(capacity);
  

  stepper_after.addEventListener("click", () => {
    amount = document.querySelector(".stepper-input").value;
    console.log(amount);
    if ( amount > capacity) {
      alert(`The sales increase more than the remaining capacity ${capacity}`)
      // stepper_after.style.pointerEvents = "none";
      // timeSelect.innerHTML = "";
      timeSelect.innerHTML = `<option selected disabled hidden>Out of the remaining capacity</option>`;
      // return amount = 1;
    } else {
      // stepper_after.style.pointerEvents = "auto";
      // stepper_before.style.pointerEvents = "auto";
      timeSelect.innerHTML = "";
      getRightTime();
    }
  });
  stepper_before.addEventListener("click", () => { 
    amount = document.querySelector(".stepper-input").value;
    console.log(amount);
    if ( amount > capacity) {
      timeSelect.innerHTML = `<option selected disabled hidden>Out of the remaining capacity</option>`;
      alert(`The sales increase more than the remaining capacity ${capacity}`)
    } else {
      timeSelect.innerHTML = "";
        getRightTime();
    }
      // stepper_before.style.pointerEvents = "none";
      // return amount = 1;
      // timeSelect.innerHTML = "";
      // timeSelect.innerHTML = `<option selected disabled hidden>Out of the remaining capacity</option>`;
    // } 
  });
  stepper_input.addEventListener("change", () => {
    amount = document.querySelector(".stepper-input").value;
    console.log(amount);
    if ( amount > capacity) {
      alert(`The sales increase more than the remaining capacity ${capacity}`)
      // return amount = 1;
      // timeSelect.innerHTML = "";
      timeSelect.innerHTML = `<option selected disabled hidden>Out of the remaining capacity</option>`;
      // return amount = 1;
    } else {
      timeSelect.innerHTML = "";
        getRightTime();
    }
  });

  // addEve
  // bookButton.addEventListener('click')
  // logger.log("button: ", bookButton);
  // bookButton.addEventListener("click", function () {
  //   fetch(`${BASE_URL}/api/carts/ajax-cart/add.js`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then(res => res.json()).then(res => {
  //     logger.log('res: ', res)
  //   }).catch(err => {
  //     logger.error('add to cart error: ', err)
  //   });
  // });

      
      locationLabel.onchange = function () {
        timeSelect.innerHTML = "";
        getRightTime();
      };
      resource.onchange = function () {
        timeSelect.innerHTML = "";
        getRightTime();
      };

      // const currentSchedule = scheduleData[days][0];
      // const currentLocation = scheduleData.locations[0];
      // const currentResource = scheduleData.resources[0];
      // const ids = `${currentSchedule.id}_${currentSchedule.adminId}_${currentSchedule.productId}_${currentSchedule.variantId}_${(currentLocation === null || currentLocation === void 0 ? void 0 : currentLocation.id) || 0}_${(currentResource === null || currentResource === void 0 ? void 0 : currentResource.id) || 0}`;
  bookButton.addEventListener("click", async () => {
    if (timeSelect.options[0].value == "none") {
      alert("Please select suitable location or resource");
    } else if (timeSelect.options[0].value == "Out of the remaining capacity") {
      alert("Please select suitable quantity");
    } else {
      await fetcher(`${BASE_URL}/api/carts/ajax-cart/add.js`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              id: sku,
              quantity: amount,
              properties: [
                {
                  name: "Booking",
                  // format('YYYY-MM-DD'),
                  value: `${selectDay}`,
                  type: "text",
                },
                // ...extra,
                // {
                //   name:'uniqueCode',
                //   value: ids,
                //   type: 'text',
                //   show: true,
                //   export: true,
                //   extInfo: '',
                // },
                
              ],
            },
          ],
        }),
      })
        .then((res) => {
          logger.log("res: ", res);
          // location.reload(); 重新加载显示增添
          // 跳转
          Shopline.event.emit("Cart::NavigateCart");
          // location.href =`${BASE_URL}/cart`
        })
        .catch((err) => {
          logger.error("add to cart error: ", err);
        });
    }
    // const extra = [];
    //         if (scheduleData.locations) {
    //             extra.push({
    //                 name: 'Location',
    //                 value: locationValue,
    //                 type: 'text',
    //                 show: true,
    //                 export: true,
    //             });
    //         }
    //         if (scheduleData.resources) {
    //             extra.push({
    //                 name: 'Resource',
    //                 value: currentResource.name,
    //                 type: 'text',
    //                 show: true,
    //                 export: true,
    //             });
    //         }
  });
  // window.Shoopline.event.emit('Cart::NavigateCart');
}
// 给button按钮绑定跳转

initBooking();
