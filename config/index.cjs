/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx788f76905f70cd77',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'eaca4b79cc2e1e63cddf443bb0a25e09',

  PROVINCE: '甘肃',
  CITY: '临夏',

  USERS: [
    {
      // 想要发送的人的名字
      name: '娇娇',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyFvL51N9dXCw1fi5xJfNfIGWglE','oyFvL5xsKjddpqTChm3MbrgiMPdU'
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Z6rMWFtUk_0U06A_sQG0DZaOAFSPvHXsTbR71D0dXj4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
     courseSchedule: [
        courses: {
          // 周课表
          // 从星期一到星期日（星期六和星期日的课表数组可不填写）
            // 周一
            [
              '09:25-10:05 高一5班',
              '10:30-11:10 高一6班'
            ],
            // 周二
            [
              '09:25-10:05 高一6班',
              '10:30-11:10 高一5班',
              '17:00-17:40 高一6班',
              '晚自习 高一5班'
            ],
            // 周三
            [
              '07:45-08:25 高一5班',
              '08:35-09:15 高一6班',
              '16:10-16:50 高一5班',
              '17:00-17:40 高一6班'
            ],
            // 周四
            [
              '10:30-11:10 高一6班',
              '11:20-12:00 高一5班',
              '17:00-17:40 高一5班'
            ],
            // 周五
            [
              '07:45-08:25 高一5班',
              '08:35-09:15 高一6班'
            ],
            // 周六
            [],
            // 周日
            []
          }
        ]
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'W4MabmcEo7DBWlNkwpI8q-BUKfKlTsHhoxuzXlrSj74',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oyFvL5xsKjddpqTChm3MbrgiMPdU',
    }
  ],

}

module.exports = USER_CONFIG

