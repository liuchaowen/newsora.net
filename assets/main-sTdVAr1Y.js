import{s as l,i as g,x as p}from"./lit-language-CGmcNQo9.js";class h extends l{static properties={imgSrc:{type:String},title:{type:String},subTitle:{type:String},timeAgo:{type:String},articlesCount:{type:String},href:{type:String}};static styles=g`
    :host {
      display: block;
      margin-bottom: 20px;
      break-inside: avoid;
      --card-bg: #ffffff;
      --card-shadow: rgba(0, 0, 0, 0.1);
      --card-shadow-hover: rgba(0, 0, 0, 0.15);
      --card-title-color: #1a1a1a;
      --card-subtitle-color: #666666;
      --card-meta-color: #999999;
      --articles-count-bg: #f0f0f0;
      --articles-count-color: inherit;
      --card-image-bg: #f5f5f5;
    }

    /* 深色模式变量 */
    :host-context([data-theme="dark"]),
    :host-context(body.dark-mode) {
      --card-bg: #2a2a2a;
      --card-shadow: rgba(0, 0, 0, 0.3);
      --card-shadow-hover: rgba(0, 0, 0, 0.4);
      --card-title-color: #ffffff;
      --card-subtitle-color: #cccccc;
      --card-meta-color: #999999;
      --articles-count-bg: #404040;
      --articles-count-color: #cccccc;
      --card-image-bg: #404040;
    }

    .news-card {
      background: var(--card-bg);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px var(--card-shadow);
      transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.3s ease;
      cursor: pointer;
    }

    .news-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 16px var(--card-shadow-hover);
    }

    .card-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      background: var(--card-image-bg);
    }

    .card-content {
      padding: 10px;
    }

    .card-title {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.4;
      margin: 0 0 8px 0;
      color: var(--card-title-color);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      transition: color 0.3s ease;
    }

    .card-subtitle {
      font-size: 14px;
      line-height: 1.4;
      color: var(--card-subtitle-color);
      margin: 0 0 12px 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      transition: color 0.3s ease;
    }

    .card-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: var(--card-meta-color);
      transition: color 0.3s ease;
      padding: 0 10px;
    }

    /* 系统偏好深色模式（作为后备） */
    @media (prefers-color-scheme: dark) {
      :host:not(:host-context([data-theme])) {
        --card-bg: #2a2a2a;
        --card-shadow: rgba(0, 0, 0, 0.3);
        --card-shadow-hover: rgba(0, 0, 0, 0.4);
        --card-title-color: #ffffff;
        --card-subtitle-color: #cccccc;
        --card-meta-color: #999999;
        --articles-count-bg: #404040;
        --articles-count-color: #cccccc;
        --card-image-bg: #404040;
      }
    }
  `;constructor(){super(),this.imgSrc="",this.title="",this.subTitle="",this.timeAgo="",this.articlesCount="",this.href=""}_handleClick(){this.href&&console.log("Navigate to:",this.href)}render(){return p`
      <div class="news-card" @click=${this._handleClick}>
        <img 
          class="card-image" 
          src=${this.imgSrc} 
          alt=${this.title}
          loading="lazy"
        />
        <div class="card-meta">
          <span class="articles-count">${this.articlesCount} ARTICLES</span>
          <span class="time-ago">${this.timeAgo.toUpperCase()}</span>
        </div>
        <div class="card-content">
          <h3 class="card-title">${this.title}</h3>
          <p class="card-subtitle">${this.subTitle}</p>
        </div>
      </div>
    `}}customElements.define("lit-news-card",h);class f extends l{static properties={text:{type:String},type:{type:String},href:{type:String},active:{type:Boolean}};static styles=g`
    :host {
      display: inline-block;
      --tag-bg: transparent;
      --tag-color: #666666;
      --tag-border: #e0e0e0;
      --tag-hover-bg: #e8e8e8;
      --tag-hover-color: #333333;
      --tag-active-bg: #007bff;
      --tag-active-color: #ffffff;
      --tag-active-border: #007bff;
      --tag-active-hover-bg: #0056b3;
      --tag-active-hover-border: #0056b3;
    }

    /* 深色模式变量 */
    :host-context([data-theme="dark"]),
    :host-context(body.dark-mode) {
      --tag-bg: #3a3a3a;
      --tag-color: #cccccc;
      --tag-border: #555555;
      --tag-hover-bg: #4a4a4a;
      --tag-hover-color: #ffffff;
      --tag-active-bg: #007bff;
      --tag-active-color: #ffffff;
      --tag-active-border: #007bff;
      --tag-active-hover-bg: #0056b3;
      --tag-active-hover-border: #0056b3;
    }

    .topic-tag {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 12px 16px;
      margin: 0 0 4px 0;
      background: var(--tag-bg);
      color: var(--tag-color);
      border: 1px solid var(--tag-border);
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.2s ease, background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
      white-space: nowrap;
      width: 100%;
    }

    .topic-tag:hover {
      background: var(--tag-hover-bg);
      color: var(--tag-hover-color);
      transform: translateY(-1px);
    }

    .topic-tag.active {
      background: var(--tag-active-bg);
      color: var(--tag-active-color);
      border-color: var(--tag-active-border);
    }

    .topic-tag.active:hover {
      background: var(--tag-active-hover-bg);
      border-color: var(--tag-active-hover-border);
    }

    /* 不同类型的标签颜色 */
    .topic-tag[data-type="popular"]:hover {
      background: #ff6b6b;
      color: #fff;
    }

    .topic-tag[data-type="popular"].active {
      background: #ff6b6b;
      border-color: #ff6b6b;
    }

    .topic-tag[data-type="technology"]:hover {
      background: #4ecdc4;
      color: #fff;
    }

    .topic-tag[data-type="technology"].active {
      background: #4ecdc4;
      border-color: #4ecdc4;
    }

    .topic-tag[data-type="sports"]:hover {
      background: #45b7d1;
      color: #fff;
    }

    .topic-tag[data-type="sports"].active {
      background: #45b7d1;
      border-color: #45b7d1;
    }

    .topic-tag[data-type="entertainment"]:hover {
      background: #f39c12;
      color: #fff;
    }

    .topic-tag[data-type="entertainment"].active {
      background: #f39c12;
      border-color: #f39c12;
    }

    .topic-tag[data-type="science"]:hover {
      background: #9b59b6;
      color: #fff;
    }

    .topic-tag[data-type="science"].active {
      background: #9b59b6;
      border-color: #9b59b6;
    }

    .topic-tag[data-type="politics"]:hover {
      background: #e74c3c;
      color: #fff;
    }

    .topic-tag[data-type="politics"].active {
      background: #e74c3c;
      border-color: #e74c3c;
    }

    .topic-tag[data-type="crime"]:hover {
      background: #34495e;
      color: #fff;
    }

    .topic-tag[data-type="crime"].active {
      background: #34495e;
      border-color: #34495e;
    }

    .topic-tag[data-type="economics"]:hover {
      background: #27ae60;
      color: #fff;
    }

    .topic-tag[data-type="economics"].active {
      background: #27ae60;
      border-color: #27ae60;
    }

    .topic-tag[data-type="video-games"]:hover {
      background: #8e44ad;
      color: #fff;
    }

    .topic-tag[data-type="video-games"].active {
      background: #8e44ad;
      border-color: #8e44ad;
    }

    /* 系统偏好深色模式（作为后备） */
    @media (prefers-color-scheme: dark) {
      :host:not(:host-context([data-theme])) {
        --tag-bg: #3a3a3a;
        --tag-color: #cccccc;
        --tag-border: #555555;
        --tag-hover-bg: #4a4a4a;
        --tag-hover-color: #ffffff;
        --tag-active-bg: #007bff;
        --tag-active-color: #ffffff;
        --tag-active-border: #007bff;
        --tag-active-hover-bg: #0056b3;
        --tag-active-hover-border: #0056b3;
      }
    }
  `;constructor(){super(),this.text="",this.type="",this.href="",this.active=!1}_handleClick(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("tag-click",{detail:{type:this.type,text:this.text,href:this.href},bubbles:!0}))}render(){return p`
      <a 
        class="topic-tag ${this.active?"active":""}" 
        data-type=${this.type}
        href=${this.href||"#"}
        @click=${this._handleClick}
      >
        ${this.text}
      </a>
    `}}customElements.define("lit-topic-tag",f);class b{constructor(){this.oss_url="https://cdn.newsora.net/assets";const t=localStorage.getItem("language")||"en";this.dataDir=t==="zh-CN"?"/json/zh-CN":"/json/en",this.imgHost="https://particle.news",this.topics=[],this.stories=[],this.currentType="popular",this.init()}async init(){await this.loadData(),this.renderTopicTags(),this.renderNewsCards(),this.bindEvents(),this.bindLanguageEvents()}async loadData(){try{const t=await fetch(this.oss_url+this.dataDir+"/home_topic.json");this.topics=await t.json();const o=await fetch(this.oss_url+this.dataDir+"/home_story.json");this.stories=await o.json()}catch(t){console.error("Failed to load data:",t)}}renderTopicTags(){const t=document.getElementById("topicNav");[...new Set(this.topics.map(e=>e.type))].forEach(e=>{const a=document.createElement("lit-topic-tag");a.text=this.getTypeDisplayName(e),a.type=e,a.active=this.currentType===e,t.appendChild(a)})}getTypeDisplayName(t){let e=(localStorage.getItem("language")||"zh-CN").replace("-","");return{zhCN:{popular:"热门",technology:"科技",sports:"体育",entertainment:"娱乐",science:"科学",politics:"政治",crime:"犯罪",economics:"经济","video-games":"游戏"},en:{popular:"Popular",technology:"Technology",sports:"Sports",entertainment:"Entertainment",science:"Science",politics:"Politics",crime:"Crime",economics:"Economics","video-games":"Video Games"}}[e]?.[t]||t}renderNewsCards(){const t=document.getElementById("newsSections");t.innerHTML="",[...new Set(this.stories.map(e=>e.type))].forEach(e=>{const a=document.createElement("div");a.className="news-section",a.id=`section-${e}`;const i=document.createElement("div");i.className="section-topics",this.topics.filter(c=>c.type===e).forEach(c=>{const r=document.createElement("span");r.className="topic-tag",r.textContent=c.text,r.addEventListener("click",()=>{window.open(`/topic/${c.href}`,"_blank")}),i.appendChild(r)}),a.appendChild(i);const n=document.createElement("div");n.className="news-grid",this.stories.filter(c=>c.type===e).forEach(c=>{const r=document.createElement("lit-news-card");r.imgSrc=this.imgHost+c.img_src,r.title=c.title,r.subTitle=c.sub_title,r.timeAgo=c.time_ago,r.articlesCount=c.articles_count,r.href=c.href,r.addEventListener("click",()=>{window.open(`/story/${c.href}`,"_blank")}),n.appendChild(r)}),a.appendChild(n),t.appendChild(a)})}bindEvents(){document.addEventListener("tag-click",t=>{const{type:o}=t.detail;this.scrollToSection(o)}),window.addEventListener("scroll",()=>{this.updateActiveNavigation(),this.handleStickyTopics()})}bindLanguageEvents(){document.addEventListener("language-changed",t=>{const{language:o,dataDir:e}=t.detail;this.dataDir=e})}scrollToSection(t){const o=document.getElementById(`section-${t}`);o&&o.scrollIntoView({behavior:"smooth"})}updateActiveNavigation(){const t=document.querySelectorAll(".news-section"),o=document.querySelectorAll("lit-topic-tag");let e=null;const a=window.innerHeight;if(t.forEach(i=>{const s=i.getBoundingClientRect();s.top<=a/2&&s.bottom>a/2&&(e=i)}),e){const i=e.id.replace("section-","");o.forEach(s=>{s.active=s.type===i})}}handleStickyTopics(){document.querySelectorAll(".news-section").forEach(o=>{const e=o.querySelector(".section-topics");if(!e)return;const a=o.getBoundingClientRect(),i=a.top,s=a.bottom;i<=0&&s>60?(e.classList.add("sticky-topics"),e.style.top="0px",o.classList.add("has-sticky-topics")):(e.classList.remove("sticky-topics"),e.style.top="",o.classList.remove("has-sticky-topics"))})}switchType(t){this.scrollToSection(t)}}document.addEventListener("DOMContentLoaded",()=>{new b});
