package com.entity.vo;

import com.entity.JingdiangonglveEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
 

/**
 * 景点攻略
 * 手机端接口返回实体辅助类 
 * （主要作用去除一些不必要的字段）
 * @author 
 * @email 
 * @date 2021-03-24 19:51:27
 */
public class JingdiangonglveVO  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 景点名称
	 */
	
	private String jingdianmingcheng;
		
	/**
	 * 出发城市
	 */
	
	private String chufachengshi;
		
	/**
	 * 行程天数
	 */
	
	private Integer xingchengtianshu;
		
	/**
	 * 行程距离
	 */
	
	private Integer xingchengjuli;
		
	/**
	 * 交通工具
	 */
	
	private String jiaotonggongju;
		
	/**
	 * 行程路线
	 */
	
	private String xingchengluxian;
		
	/**
	 * 景点封面
	 */
	
	private String jingdianfengmian;
		
	/**
	 * 攻略详情
	 */
	
	private String gonglvexiangqing;
		
	/**
	 * 赞
	 */
	
	private Integer thumbsupnum;
		
	/**
	 * 踩
	 */
	
	private Integer crazilynum;
				
	
	/**
	 * 设置：景点名称
	 */
	 
	public void setJingdianmingcheng(String jingdianmingcheng) {
		this.jingdianmingcheng = jingdianmingcheng;
	}
	
	/**
	 * 获取：景点名称
	 */
	public String getJingdianmingcheng() {
		return jingdianmingcheng;
	}
				
	
	/**
	 * 设置：出发城市
	 */
	 
	public void setChufachengshi(String chufachengshi) {
		this.chufachengshi = chufachengshi;
	}
	
	/**
	 * 获取：出发城市
	 */
	public String getChufachengshi() {
		return chufachengshi;
	}
				
	
	/**
	 * 设置：行程天数
	 */
	 
	public void setXingchengtianshu(Integer xingchengtianshu) {
		this.xingchengtianshu = xingchengtianshu;
	}
	
	/**
	 * 获取：行程天数
	 */
	public Integer getXingchengtianshu() {
		return xingchengtianshu;
	}
				
	
	/**
	 * 设置：行程距离
	 */
	 
	public void setXingchengjuli(Integer xingchengjuli) {
		this.xingchengjuli = xingchengjuli;
	}
	
	/**
	 * 获取：行程距离
	 */
	public Integer getXingchengjuli() {
		return xingchengjuli;
	}
				
	
	/**
	 * 设置：交通工具
	 */
	 
	public void setJiaotonggongju(String jiaotonggongju) {
		this.jiaotonggongju = jiaotonggongju;
	}
	
	/**
	 * 获取：交通工具
	 */
	public String getJiaotonggongju() {
		return jiaotonggongju;
	}
				
	
	/**
	 * 设置：行程路线
	 */
	 
	public void setXingchengluxian(String xingchengluxian) {
		this.xingchengluxian = xingchengluxian;
	}
	
	/**
	 * 获取：行程路线
	 */
	public String getXingchengluxian() {
		return xingchengluxian;
	}
				
	
	/**
	 * 设置：景点封面
	 */
	 
	public void setJingdianfengmian(String jingdianfengmian) {
		this.jingdianfengmian = jingdianfengmian;
	}
	
	/**
	 * 获取：景点封面
	 */
	public String getJingdianfengmian() {
		return jingdianfengmian;
	}
				
	
	/**
	 * 设置：攻略详情
	 */
	 
	public void setGonglvexiangqing(String gonglvexiangqing) {
		this.gonglvexiangqing = gonglvexiangqing;
	}
	
	/**
	 * 获取：攻略详情
	 */
	public String getGonglvexiangqing() {
		return gonglvexiangqing;
	}
				
	
	/**
	 * 设置：赞
	 */
	 
	public void setThumbsupnum(Integer thumbsupnum) {
		this.thumbsupnum = thumbsupnum;
	}
	
	/**
	 * 获取：赞
	 */
	public Integer getThumbsupnum() {
		return thumbsupnum;
	}
				
	
	/**
	 * 设置：踩
	 */
	 
	public void setCrazilynum(Integer crazilynum) {
		this.crazilynum = crazilynum;
	}
	
	/**
	 * 获取：踩
	 */
	public Integer getCrazilynum() {
		return crazilynum;
	}
			
}
